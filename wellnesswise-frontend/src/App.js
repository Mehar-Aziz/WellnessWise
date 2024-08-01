import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home"; 
import CreateProfileButton from "./components/CreateProfileButton";
import CreateProfile1 from "./components/CreateProfile1";
import Profile from "./pages/profile";
import { UserProvider } from "./context/UserContext";
import Resources from "./pages/Resources";
import Connections from "./pages/Connection";
import Advice from "./pages/Advice";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPass";
import VerifyEmail from "./pages/EmailVerification";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3000/api") 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);
  
  return (
      <UserProvider>
        <Router>
          <div id="root">
            <div className="App">
              {showNav && <Navbar />}
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/verify/:token" element={<VerifyEmail />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/button" element={<CreateProfileButton funcNav={setShowNav} />} />
                <Route path="/createprofile" element={<CreateProfile1 />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/connection" element={<Connections />} />
                <Route path="/advice" element={<Advice />} />
              </Routes>
              {showNav && <Footer />}
            </div>
          </div>
        </Router>
      </UserProvider>
  );
}

export default App;
