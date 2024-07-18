import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Login from "./components/Login";

function App() {
  return (
    <div id="root">
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Routing logic or conditional rendering based on state */}
          <Login />
          {/* <Registration /> */}
        </div>
      
      </div>
      <Footer />
    </div>
  );
}

export default App;