import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import './Login.css'; 
import './CreateProfile.css'

const CreateProfile1 = () => {
  const navigate = useNavigate();

  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [birth, setBirth] = useState('');
  const [age, setAge] = useState('');
 
  const [hobbies, setHobbies] = useState(['']);
  const [goals, setGoals] = useState(['']);

  const handleHobbyChange = (index, event) => {
    const newHobbies = hobbies.slice();
    newHobbies[index] = event.target.value;
    setHobbies(newHobbies);
  };

  const handleGoalChange = (index, event) => {
    const newGoals = goals.slice();
    newGoals[index] = event.target.value;
    setGoals(newGoals);
  };

  const handleAddHobby = () => {
    if (hobbies.length < 5) {
      setHobbies([...hobbies, '']);
    }
  };

  const handleAddGoal = () => {
    if (goals.length < 5) {
      setGoals([...goals, '']);
    }
  };


  const handleRemoveHobby = (index) => {
    const newHobbies = hobbies.slice();
    newHobbies.splice(index, 1);
    setHobbies(newHobbies);
  };

const handleRemoveGoal = (index) => {
    const newGoals = goals.slice();
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  
    // Reset form fields
    setEducation('');
    setAge('');
    setBirth('');
    setHobbies('');
    setGoals('')
    setGender('');
  

    //Navigate to login
    navigate('/button');

  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>CREATE PROFILE</span></div>
        <form onSubmit={handleSubmit}>
        <div className="row">
            <i className="fas fa-venus-mars"></i>
            <input
              type="text"
              placeholder="Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>
       
          <div className="row">
            <i className="fas fa-user"></i>
            <input
              type="number"
              placeholder="Current Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fa fa-calendar"></i>
            <input
              type="date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              required
            />
          </div>
          
          {hobbies.map((hobby, index) => (
        <div className="row" key={index}>
          <i className="fas fa-laptop-house"></i>
          <input
            type="text"
            placeholder="Enter your hobby"
            value={hobby}
            onChange={(e) => handleHobbyChange(index, e)}
            required
          />
          {hobbies.length > 1 && (
            <button
              type="button"
              onClick={() => handleRemoveHobby(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}
      {hobbies.length < 5 && (
        <button className="addBtn" type="button" onClick={handleAddHobby}>
          Add another
        </button>
      )}

{goals.map((goal, index) => (
          <div className="row" key={index}>
            <i className="fas fa-bullseye"></i>
            <input
              type="text"
              placeholder="Enter your goals"
              value={goal}
              onChange={(e) => handleGoalChange(index, e)}
              required
            />
            {goals.length > 1 && (
              <button
                type="button"
                className='removebtn'
                onClick={() => handleRemoveGoal(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        {goals.length < 5 && (
          <button type="button" className='addBtn' onClick={handleAddGoal}>
            Add another
          </button>
        )}
         <div className="row">
            <i className="fas fa-school"></i>
            <input
              type="text"
              placeholder="Highest Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              required
            />
          </div>

          <div className="row">
  <label className="terms">
    <input type="checkbox" required  />
    I agree with<a href="/terms"> Terms and Conditions</a>. 
  </label>
</div>
<div className="row button">
            <input type="submit" value="CREATE" />
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default CreateProfile1;
