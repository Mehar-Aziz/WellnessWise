import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    password: {
        type: String,
        required: true,
    },
    profile: {
    gender: String,
    education: String,
    birth: Date,
    age: Number,
    hobbies: [String],
    goals: [String]
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    verificationToken: String,
    isVerified: {
    type: Boolean,
    default: false
  }
});

//hashing password for privacy and safety/security.
UserSchema.pre('save',async function(next){
    if(this.isModified('password') || this.isNew){
        try{
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password,salt);
            next();
        } catch (err){
            next(err);
        }

    } else {
        return next();
    }
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;