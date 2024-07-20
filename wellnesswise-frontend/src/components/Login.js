// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; 

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Mock login validation (replace with your own logic)
//     if (email === "test@example.com" && password === "password123") {
//         // Mock successful login action
//         console.log("Login successful!");
//         // Reset form fields
//         setEmail("");
//         setPassword("");

//         navigate("/")
//       } else {
//         // Mock unsuccessful login action
//         console.log("Error")
//       }
//     };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form className="login-form" onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import './Login.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted!');
    console.log('Email/Phone:', emailOrPhone);
    console.log('Password:', password);
    // Reset form fields
    setEmailOrPhone('');
    setPassword('');
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="title"><span>LOGIN</span></div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="Email or Phone"
              value={emailOrPhone}
              onChange={(e) => setEmailOrPhone(e.target.value)}
              required
            />
          </div>
          <div className="row">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="pass"><a href="#forgot">Forgot password?</a></div>
          <div className="row button"><Link to="/profile">
            <input type="submit" value="SIGN IN" /></Link>
          </div>
          <div className="signup-link">Not a member? <Link to="/register" >Signup now</Link></div>
        </form>
      </div>
    </div>
  );
};

export default Login;

