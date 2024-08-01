import mongoose from 'mongoose';
import Resource from './models/Resource.js'; 

const initialResources = [
  { id: 1, category: 'Physical Wellness', title: 'Online Workout Videos', description: 'Fitness programs available on platforms like Fitbit and Peloton.', link: 'https://www.fitbit.com/global/us/technology/fitbit-app' },
  { id: 2, category: 'Physical Wellness', title: 'Meal Planning Apps', description: 'Apps like MyFitnessPal for meal tracking and nutritional information.', link: 'https://www.myfitnesspal.com/' },
  { id: 3, category: 'Physical Wellness', title: 'Health Monitoring Devices', description: 'Wearable devices for tracking health metrics such as blood pressure and glucose levels.', link: 'https://healthcare-digital.com/digital-healthcare/top-10-wearable-healthcare-devices' },
  { id: 4, category: 'Mental Wellness', title: 'Meditation Apps', description: 'Apps such as Headspace and Calm for mindfulness and relaxation.', link: 'https://www.verywellmind.com/best-meditation-apps-4767322' },
  { id: 5, category: 'Mental Wellness', title: 'Online Therapy Services', description: 'Platforms like BetterHelp and Talkspace for accessing licensed therapists.', link:'https://www.betterhelp.com/get-started/?go=true&utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_e&utm_content=133525856150&network=g&placement=&target=&matchtype=e&utm_campaign=15228709182&ad_type=text&adposition=&kwd_id=kwd-300752210814&gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujglA9wKqJMKImCpQ3pCSlBLfJoDCUqqVNjZ9ZBqkBJgWgD15qVtT9xoC5ncQAvD_BwE&not_found=1&gor=start' },
  { id: 6, category: 'Mental Wellness', title: 'Stress Management Workshops', description: 'Workshops and courses designed to help manage and reduce stress.', link:'https://www.who.int//news-room/questions-and-answers/item/stress/?gad_source=1&gclid=CjwKCAjw5Ky1BhAgEiwA5jGujkxEMtRKAP5pJib1ariB9jJVNFlm7rwJ3Q2Tcc-w8S7caOPlKk6-JBoCpSUQAvD_BwE' },
  { id: 7, category: 'Emotional Wellness', title: 'Support Groups', description: 'Groups for specific issues like grief or addiction.', link:'https://www.helpguide.org/articles/therapy-medication/support-groups.htm' },
  { id: 8, category: 'Emotional Wellness', title: 'Personal Growth Workshops', description: 'Workshops focused on resilience and personal development.', link:'https://www.familycentre.org/classes/self-improvement-workshops' },
  { id: 9, category: 'Emotional Wellness', title: 'Journaling and Reflective Practices', description: 'Techniques for self-reflection and emotional processing.', link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8394420/' },
  { id: 10, category: 'Social Wellness', title: 'Volunteer Opportunities', description: 'Community service and volunteering activities.', link:'https://varthana.com/school/how-volunteer-and-service-activities-benefit-students' },
  { id: 11, category: 'Social Wellness', title: 'Social Clubs', description: 'Clubs and groups such as book clubs and sports teams.', link:'https://www.nih.gov/health-information/social-wellness-toolkit' },
  { id: 12, category: 'Social Wellness', title: 'Relationship Counseling', description: 'Counseling and workshops to improve relationships and communication.', link:'https://www.theknowledgeacademy.com/blog/relationship-counselling/' },
  { id: 13, category: 'Educational Resources', title: 'Online Courses', description: 'Courses on wellness topics available on platforms like Coursera and Udemy.',link:'https://www.coursera.org/courses?query=health%20and%20wellness' },
  { id: 14, category: 'Educational Resources', title: 'Books on Wellness', description: 'Books and resources on health, nutrition, and personal development.', link:'https://www.thelyonsshare.org/2024/01/09/top-books-on-health-personal-development-and-more-to-add-to-your-2024-reading-list/' },
  { id: 15, category: 'Educational Resources', title: 'Webinars and Seminars', description: 'Educational events on various wellness topics.', link:'https://strive2bfit.com/health-education-seminars/' },
  { id: 16, category: 'Technology-Based Resources', title: 'Wellness Tracking Apps', description: 'Apps for tracking mood, sleep, and other wellness metrics.', link:'https://onlinedegrees.bradley.edu/blog/mental-wellness-apps/' },
  { id: 17, category: 'Technology-Based Resources', title: 'Virtual Wellness Consultations', description: 'Telemedicine services for virtual health consultations.', link: 'https://www.fcps.edu/news/free-virtual-mental-wellness-consultations-during-summer-2024' },
  { id: 18, category: 'Technology-Based Resources', title: 'Interactive Wellness Tools', description: 'Digital tools and games for engaging in wellness activities.', link:'https://beyou.edu.au/resources/tools-and-guides/wellbeing-tools-for-students' },
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
