export async function createUser (req,res){
    try {
        const { name, email, phone, address, password } = req.body;
        const newUser = new UserModel({ name, email, phone, address, password });
        await newUser.save();
        res.status(201).json({message: 'User registered successfully', userId: newUser._id });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error});
    }
}