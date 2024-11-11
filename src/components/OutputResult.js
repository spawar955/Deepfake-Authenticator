// src/components/OutputResult.js
import React from 'react';

function OutputResult({ result }) {
  if (result === null) {
    return <></>; // Return empty until a video is uploaded
  }

  return (
    <div>
      <h2>Authentication Result</h2>
      <p>{result ? 'The video is original' : 'The video is AI generateds'}</p>
    </div>
  );
}

export default OutputResult;
