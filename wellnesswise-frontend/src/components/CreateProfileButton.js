import React from 'react';
import './CreateProfileButton.css';
import { useNavigate } from 'react-router-dom';

const CreateProfileButton = ({ onClose }) => {
    const navigate = useNavigate();
    //hide navbar anf footer
    // React.useEffect(() => {
    //     props.funcNav(false);
    //     return () => 
    //         //to make it visile oafter
    //         props.funcNav(true);
    // }, [props]);

    const handleSkip = () => {
      onClose();
navigate('/profile');//got to dashboard profile

    };

    const handleCreate = () => {
      onClose();
        navigate('/createprofile');
        
    };
   
  return (
    <div className="card">
      <h1>CONTINUE CREATING PROFILE?</h1>
      <button className="card-button" onClick={handleSkip}>SKIP</button>
      <button className="card-button" onClick={handleCreate}>CREATE</button>
    </div>
  );
};

export default CreateProfileButton;
