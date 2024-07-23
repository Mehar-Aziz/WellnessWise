import React, { useState } from 'react';
import './Advice.css';

const initialAdvice = [
  { id: 1, advice: 'Drink more water and stay hydrated throughout the day.' },
  { id: 2, advice: 'Incorporate at least 30 minutes of exercise into your daily routine.' },
  { id: 3, advice: 'Practice mindfulness and meditation to reduce stress.' },
];

const Advice = () => {
  const [userPreferences, setUserPreferences] = useState({
    goal: '',
    dietaryPreference: '',
  });

  const [personalizedAdvice, setPersonalizedAdvice] = useState(initialAdvice);

  const handlePreferenceChange = (event) => {
    const { name, value } = event.target;
    setUserPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const handleUpdatePreferences = () => {
    
    alert('Preferences updated! Advice will be adjusted accordingly.');
  };

  return (
    <div className="personalized-advice-page">
      <h1>Personalized Advice</h1>
      <p>Receive personalized wellness advice based on your profile and goals.</p>

      <div className="preferences-form">
        <h2>Update Your Preferences</h2>
        <label>
          Goal:<br />
          <input
            type="text"
            name="goal"
            value={userPreferences.goal}
            onChange={handlePreferenceChange}
            placeholder="Enter your wellness goal"
          />
        </label>
        <label>
          Dietary Preference:<br />
          <select
            name="dietaryPreference"
            value={userPreferences.dietaryPreference}
            onChange={handlePreferenceChange}
          >
            <option value="">--Select Dietary Preference--</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="paleo">Paleo</option>
            <option value="keto">Keto</option>
            <option value="other">Other</option>
          </select>
        </label>
        <button onClick={handleUpdatePreferences}>Update Preferences</button>
      </div>

      <div className="advice-section">
        <h2>Your Personalized Advice</h2>
        <ul>
          {personalizedAdvice.map((item) => (
            <li key={item.id}>{item.advice}</li>
          ))}
        </ul>
      </div>

      <div className="progress-tracker">
        <h2>Track Your Progress</h2>
      </div>
    </div>
  );
};

export default Advice;
