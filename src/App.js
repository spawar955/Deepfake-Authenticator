// src/App.js
import React, { useState } from 'react';
import VideoUploader from './components/VideoUploader';
import OutputResult from './components/OutputResult';
import Header from './components/Header';
import './App.css';

function App() {
  const [outputResult, setOutputResult] = useState(null);

  const handleVideoUpload = (file) => {
    console.log('Uploaded file:', file);

    // Simulate video processing and update output to true
    setOutputResult(true);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="video-uploader">
          <VideoUploader onVideoUpload={handleVideoUpload} />
        </div>
        <div className="output-result">
          <OutputResult result={outputResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
