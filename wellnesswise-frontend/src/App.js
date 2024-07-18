import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 

function App() {
  return (
    <div id="root">
      <div className="App">
        <Navbar />
        {/* Your main content here */}
      </div>
      <Footer />
    </div>
  );
}

export default App;