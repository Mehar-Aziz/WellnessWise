import express from 'express';
import UserModel from '../models/userSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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


export default router;