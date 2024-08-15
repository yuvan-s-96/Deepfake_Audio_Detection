import React from 'react';
import Navbar from './NavBar'; 
import Copyright from './CopyRight';// Corrected import path
import '../styles/Homepage.css'; // Corrected import path
 // Import the Carousel component
import Carousel from './Carousel';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="homepage-content">
        <h1>Welcome to Deepfake Detection Website</h1>
        <p>This website aims to provide information about deepfake detection techniques and tools.</p>
        <Carousel/>
        <Copyright/>
      </div>
    </div>
  );
};

export default HomePage;
