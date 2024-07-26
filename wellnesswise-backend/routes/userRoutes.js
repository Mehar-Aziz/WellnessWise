import express from 'express';
import UserModel from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer'


const router = express.Router();

//registration endpoint
router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, address, password } = req.body;
        const newUser = new UserModel({ name, email, phone, address, password });
        await newUser.save();
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

//generate jwt token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token, userId: user._id });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
});

//forgot password
router.post('/forgot-password', async (req, res)=>{
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email
    const transporter = nodemailer.createTransport({
      // Configure your email service here
      service: 'gmail',
      auth: {
        user: 'meharaziz.1614@gmail.com'
      }
    });

    const mailOptions = {
      to: user.email,
      from: 'your-email@gmail.com',
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please click on the following link, or paste this into your browser to complete the process:\n\n
        http://${req.headers.host}/reset/${resetToken}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Reset email sent' });
  } catch (error) {
    res.status(500).json({ message: 'Error in password reset request', error: error.message });
  }
});


export default router;