import express from 'express';
import UserModel from '../models/userSchema.js';

const router = express.Router();

//registration endpoint
router.post('/register', async (req, res) => {
    try {
        const { name, email, phone, address, password } = req.body;
        const newUser = new UserModel({ name, email, phone, address, password});
        await newUser.save();
        res.status(201).json({message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error});
    }
});

//other

export default router;