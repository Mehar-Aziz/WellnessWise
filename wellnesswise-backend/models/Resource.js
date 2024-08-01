import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String, required: false } 
});

const Resource = mongoose.model('Resource', resourceSchema);
export default Resource;
