import express from 'express';
import UserModel from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config('.env');

const router = express.Router();

//registration endpoint
router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, address, password } = req.body;
        // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate verification token
    const verificationToken = crypto.randomBytes(20).toString('hex');


        const newUser = new UserModel({ name, email, phone, address, password, verificationToken, isVerified: false });
        await newUser.save();
//
const transporter = nodemailer.createTransport({
 
  service: 'Gmail',
  host:'smtp.gmail.com',
  port:465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  to: newUser.email,
  from: 'your-email@gmail.com',
  subject: 'Email Verification',
  text: `Please click on the following link, or paste this into your browser to verify your email:\n\n
    http://${req.headers.host}/verify/${verificationToken}\n\n
    If you did not sign up for an account, please ignore this email.\n`
};
await transporter.sendMail(mailOptions);


        res.status(201).json({message: 'User registered successfully', userId: newUser._id });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error});
    }
});

// Profile creation
router.post('/createprofile', async (req, res) => {
    try {
      const { userId, gender, education, birth, age, hobbies, goals } = req.body;
      const user = await UserModel.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.profile = { gender, education, birth, age, hobbies, goals };
      await user.save();
      res.status(200).json({ message: 'Profile created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create profile', error });
    }
  });

//login
router.post('/login', async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;
    console.log('Login Attempt:', emailOrPhone);

    const user = await UserModel.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }]
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token, userId: user._id });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

//forgot password
router.post('/forgot-password', async (req, res)=>{
  console.log(process.env.EMAIL_USER);
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    
    const transporter = nodemailer.createTransport({
 
      service: 'Gmail',
      host:'smtp.gmail.com',
      port:465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL_USER,
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://${req.headers.host}/reset-password/${resetToken}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Reset email sent' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error in password reset request', error: error.message }); 
  }
});

//reset password
router.post('/reset-password/:token', async (req, res) => {
  try {
    console.log('Heelow');
    const { token } = req.params;
    const { password } = req.body;

    const user = await UserModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Password reset token is invalid or has expired' });
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: 'Password has been reset' });
  } catch (error) {
    res.status(500).json({ message: 'Error resetting password', error: error.message });
  }
});

//email verification route 
router.get('/verify/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const user = await UserModel.findOne({ verificationToken: token });

    if (!user) {
      return res.status(400).json({ message: 'Invalid verification token' });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: 'Email verified successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error verifying email', error: error.message });
  }
});

export default router;