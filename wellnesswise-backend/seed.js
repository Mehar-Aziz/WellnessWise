import mongoose from 'mongoose';
import Resource from './models/Resource.js'; // Adjust the path if necessary

const initialResources = [
  { id: 1, category: 'Physical Wellness', title: 'Online Workout Videos', description: 'Fitness programs available on platforms like Fitbit and Peloton.' },
  { id: 2, category: 'Physical Wellness', title: 'Meal Planning Apps', description: 'Apps like MyFitnessPal for meal tracking and nutritional information.' },
  { id: 3, category: 'Physical Wellness', title: 'Health Monitoring Devices', description: 'Wearable devices for tracking health metrics such as blood pressure and glucose levels.' },
  { id: 4, category: 'Mental Wellness', title: 'Meditation Apps', description: 'Apps such as Headspace and Calm for mindfulness and relaxation.' },
  { id: 5, category: 'Mental Wellness', title: 'Online Therapy Services', description: 'Platforms like BetterHelp and Talkspace for accessing licensed therapists.' },
  { id: 6, category: 'Mental Wellness', title: 'Stress Management Workshops', description: 'Workshops and courses designed to help manage and reduce stress.' },
  { id: 7, category: 'Emotional Wellness', title: 'Support Groups', description: 'Groups for specific issues like grief or addiction.' },
  { id: 8, category: 'Emotional Wellness', title: 'Personal Growth Workshops', description: 'Workshops focused on resilience and personal development.' },
  { id: 9, category: 'Emotional Wellness', title: 'Journaling and Reflective Practices', description: 'Techniques for self-reflection and emotional processing.' },
  { id: 10, category: 'Social Wellness', title: 'Volunteer Opportunities', description: 'Community service and volunteering activities.' },
  { id: 11, category: 'Social Wellness', title: 'Social Clubs', description: 'Clubs and groups such as book clubs and sports teams.' },
  { id: 12, category: 'Social Wellness', title: 'Relationship Counseling', description: 'Counseling and workshops to improve relationships and communication.' },
  { id: 13, category: 'Educational Resources', title: 'Online Courses', description: 'Courses on wellness topics available on platforms like Coursera and Udemy.' },
  { id: 14, category: 'Educational Resources', title: 'Books on Wellness', description: 'Books and resources on health, nutrition, and personal development.' },
  { id: 15, category: 'Educational Resources', title: 'Webinars and Seminars', description: 'Educational events on various wellness topics.' },
  { id: 16, category: 'Technology-Based Resources', title: 'Wellness Tracking Apps', description: 'Apps for tracking mood, sleep, and other wellness metrics.' },
  { id: 17, category: 'Technology-Based Resources', title: 'Virtual Wellness Consultations', description: 'Telemedicine services for virtual health consultations.' },
  { id: 18, category: 'Technology-Based Resources', title: 'Interactive Wellness Tools', description: 'Digital tools and games for engaging in wellness activities.' },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/WellnessWise', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');

    // Clear existing data
    await Resource.deleteMany({});
    console.log('Existing resources deleted');

    // Insert initial resources
    await Resource.insertMany(initialResources);
    console.log('Initial resources inserted');
    
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDatabase();
