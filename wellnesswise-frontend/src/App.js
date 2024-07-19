import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <Router>
    <div id="root">
      <div className="App">
        <Navbar />
        <Routes>
          {/*<Route path="/" exact element={<Home />} />*/}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          {/* Define other routes for different pages/components */}
        </Routes>
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;