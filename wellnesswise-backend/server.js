import express from 'express';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb://localhost:27017/WellnessWise', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.get("/api",(req,res)=>{
    res.json({ "users" : ["userOne", "userTwo", "userThree"]});
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});