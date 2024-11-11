// src/components/OutputResult.js
import React from 'react';

function OutputResult({ result }) {
  if (result === null) {
    return <></>; // Return empty until a video is uploaded
  }

  return (
    <div>
      <h2>Output Result</h2>
      <p>{result ? 'true' : 'false'}</p>
    </div>
  );
}

export default OutputResult;
