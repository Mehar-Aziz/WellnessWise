import React from 'react';
import './CreateProfileButton.css';
import { useNavigate } from 'react-router-dom';
const CreateProfileButton = (props) => {
    const navigate = useNavigate();
    //hide navbar anf footer
    React.useEffect(() => {
        props.funcNav(false);
        return () => 
            //to make it visile oafter
            props.funcNav(true);
    }, [props]);

    const handleSkip = () => {
navigate('/home')//got to dashboard profile
    };

    /*const handleCreate = () => {
        navigate('/createProfile')
    }*/
   
  return (
    <div className="card">
      <button className="card-button" onClick={handleSkip}>SKIP</button>
      <button className="card-button">CREATE</button>
    </div>
  );
};

export default CreateProfileButton;
