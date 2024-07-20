// import React, { useState } from 'react';
// import './Resources.css';

// const initialBooks = [
//   { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//   { id: 2, title: '1984', author: 'George Orwell' },
//   { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//   // Add more books as needed
// ];

// const Resources = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [books, setBooks] = useState(initialBooks);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredBooks = books.filter((book) =>
//     book.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="library-page">
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search for a book..."
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <div className="book-list">
//         {filteredBooks.length > 0 ? (
//           filteredBooks.map((book) => (
//             <div key={book.id} className="book-item">
//               <h3>{book.title}</h3>
//               <p>{book.author}</p>
//             </div>
//           ))
//         ) : (
//           <p>No books found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Resources;
import React, { useState } from 'react';
import './Resources.css';

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

const WellnessPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState(initialResources);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wellness-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a wellness resource..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="resource-list">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div key={resource.id} className="resource-item">
              <h3>{resource.title}</h3>
              <p className='category'><strong className='category'>Category:</strong> {resource.category}</p>
              <p>{resource.description}</p>
            </div>
          ))
        ) : (
          <p>No resources found</p>
        )}
      </div>
    </div>
  );
};

export default WellnessPage;
