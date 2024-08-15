import React, { useState } from 'react';
import Navbar from './NavBar'; // Adjust the path based on your file structure
import '../styles/Featurepage.css'; // Adjust the path based on your file structure

const AudioDeepfake = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      setError('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Network response was not ok');
      }

      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (error) {
      setError(`An error occurred: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="feature-content">
        <h1>Audio Deepfake Detection</h1>
        <p>Upload an audio file to check if it's a deepfake using our detection tool.</p>
        <img 
          src="https://img.freepik.com/free-photo/person-having-hearing-issues_23-2150038479.jpg?ga=GA1.2.638949599.1708156796&semt=ais_hybrid"  // Replace with the actual image URL or local path
          alt="Video Deepfake Detection"
          style={{ width: '100%', maxHeight: '700px', objectFit: 'cover', marginBottom: '20px' }}
        />
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} accept="audio/*" />
          <button type="submit">Upload</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && (
          <div>
            <h2>Detection Result:</h2>
            <ul>
              {result.map((item, index) => (
                <li key={index}>
                  <strong>Label:</strong> {item.label}, <strong>Score:</strong> {item.score}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioDeepfake;
