import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Advice.css';
import adviceim from '../assets/undraw_random_thoughts_re_cob6.svg'

const initialAdvice = [
  { id: 1, advice: 'Drink more water and stay hydrated throughout the day.' },
  { id: 2, advice: 'Incorporate at least 30 minutes of exercise into your daily routine.' },
  { id: 3, advice: 'Practice mindfulness and meditation to reduce stress.' },
];

const Advice = () => {
  const [userPreferences, setUserPreferences] = useState({
    goal: '',
    dietaryPreference: '',
    weight: '',
    height: '',
    unit: 'metric' // 'metric' or 'imperial'
  });

  const [personalizedAdvice, setPersonalizedAdvice] = useState(initialAdvice);
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState(null);

  const handlePreferenceChange = (event) => {
    const { name, value } = event.target;
    setUserPreferences((prevPreferences) => ({
      ...prevPreferences,
      [name]: value,
    }));
  };

  const calculateBMI = async () => {
  const { weight, height, unit } = userPreferences;
  let url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric';
  let params = { weight, height };

  if (unit === 'imperial') {
    url = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial';
    params = { weight, height };
  }

  console.log('Params:', params); // Log params to check input values

  const options = {
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'x-rapidapi-key': '750ded2d21msh01e06172ba14198p148a06jsn5de470ef108c',
      'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log('API Response:', response.data); // Log API response
    setBmi(response.data.bmi);
    getBmiCategory(response.data.bmi);
  } catch (error) {
    console.error('Error:', error); // Log errors
  }
};
  const getBmiCategory = async (bmiValue) => {
    const options = {
      method: 'GET',
      url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/weight-category',
      params: { bmi: bmiValue },
      headers: {
        'x-rapidapi-key': '750ded2d21msh01e06172ba14198p148a06jsn5de470ef108c',
        'x-rapidapi-host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setBmiCategory(response.data.weightCategory);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePreferences = () => {
    calculateBMI();

  };

  useEffect(() => {
    if (bmi && bmiCategory) {
      setPersonalizedAdvice([
        ...initialAdvice,
        { id: 4, advice: `Your BMI is ${bmi.toFixed(1)}, which falls into the ${bmiCategory} category.` }
      ]);
    }
  }, [bmi, bmiCategory]);

  return (
    <div className="personalized-advice-page" style={{
      backgroundImage: `linear-gradient(
        rgba(251, 247, 240, 1),
        rgba(251, 247, 240, 0.8)
      ), url(${adviceim})`,
      backgroundSize: '80%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat'
    }}>
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
        <label>
          Weight:<br />
          <input
            type="number"
            name="weight"
            value={userPreferences.weight}
            onChange={handlePreferenceChange}
            placeholder={userPreferences.unit === 'metric' ? 'Weight in kg' : 'Weight in lbs'}
          />
        </label>
        <label>
          Height:<br />
          <input
            type="number"
            name="height"
            value={userPreferences.height}
            onChange={handlePreferenceChange}
            placeholder={userPreferences.unit === 'metric' ? 'Height in meters' : 'Height in inches'}
          />
        </label>
        <label>
          Unit System:<br />
          <select
            name="unit"
            value={userPreferences.unit}
            onChange={handlePreferenceChange}
          >
            <option value="metric">Metric (kg/m)</option>
            <option value="imperial">Imperial (lbs/in)</option>
          </select>
        </label>
        <button onClick={handleUpdatePreferences}>Calculate</button>
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
        {bmi && <p>Your BMI: {bmi.toFixed(1)}</p>}
        {bmiCategory && <p>BMI Category: {bmiCategory}</p>}
      </div>
    </div>
  );
};

export default Advice;