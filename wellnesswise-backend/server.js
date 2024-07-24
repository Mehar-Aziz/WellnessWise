import express from 'express';
import mongoose from 'mongoose';
import UserModel from './models/userSchema.js';
import cors from 'cors';

const app = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/WellnessWise')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.get("/getUsers",(req,res)=>{
    UserModel.find({}).then(function(users){
        res.json(users)
    });
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});