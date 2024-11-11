// src/components/VideoUploader.js
import React from 'react';

function VideoUploader({ onVideoUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onVideoUpload(file);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <input type="file" accept="video/*" onChange={handleFileChange} />
    </div>
  );
}

export default VideoUploader;
