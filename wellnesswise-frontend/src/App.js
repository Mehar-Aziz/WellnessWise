import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Login from "./components/Login";

function App() {
  return (
    <Router>
    <div id="root">
      <div className="App">
        <Navbar />
        <Routes>
          {/*<Route path="/" exact component={Home} />*/}
          <Route path="/login" element={<Login />} />
          {/* Define other routes for different pages/components */}
        </Routes>
      
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;