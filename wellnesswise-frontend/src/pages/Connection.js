import React, { useState } from 'react';
import './Connection.css';

// Sample expert data
const experts = [
  { id: 1, name: 'Dr. Jane Smith', specialty: 'Nutrition' },
  { id: 2, name: 'John Doe', specialty: 'Mental Health' },
  { id: 3, name: 'Emily Johnson', specialty: 'Fitness' },
];

const Connections = () => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [sessionDate, setSessionDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleExpertSelect = (event) => {
    setSelectedExpert(event.target.value);
  };

  const handleDateChange = (event) => {
    setSessionDate(event.target.value);
  };

  const handleShowCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleBookSession = () => {
    if (selectedExpert && sessionDate) {
      // Handle booking logic here
      alert(`Session booked with expert ID ${selectedExpert} on ${sessionDate}`);
    } else {
      alert('Please select an expert and choose a date.');
    }
  };

  return (
    <div className="expert-connections-page">
      <h1>Expert Connections</h1>
      <p>Connect with wellness experts for support. Book sessions and access video/chat functionality.</p>

      <div className="booking-form">
        <h2>Book a Session</h2>
        <label>
          Select Expert:
          <select onChange={handleExpertSelect} value={selectedExpert}>
            <option value="">--Select an Expert--</option>
            {experts.map((expert) => (
              <option key={expert.id} value={expert.id}>
                {expert.name} - {expert.specialty}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handleShowCalendar}>
          {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
        </button>
        {showCalendar && (
          <input
            type="date"
            value={sessionDate}
            onChange={handleDateChange}
          />
        )}
        <button onClick={handleBookSession}>Book Session</button>
      </div>

      <div className="video-chat-section">
        <h2>Video and Chat</h2>
        <p>Integrate with video conferencing APIs to start your session.</p>
        <button onClick={() => alert('Video/Chat functionality not implemented yet.')}>
          Start Video/Chat Session
        </button>
      </div>
    </div>
  );
};

export default Connections;
