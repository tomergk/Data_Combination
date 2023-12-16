import React, { useState, useEffect } from 'react';
import Gpt from '../gpt/Gpt';
import Bard from '../bard/Bard';
import './Phase1.css';

export default function Phase1({ userInput, setGptResponse, setBardResponse }) {

  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    // useEffect is triggered whenever the searchValue prop changes.
    if (userInput) {
      setPrompt(userInput);
    }
  }, [userInput]);

  return (
    <div className='general_container'>
      <h2 style={{ color: '#FE98AD' }}>Phase 1 - Individual Interpretation</h2>
      <div className='phase phase_one'>
        <Gpt thePrompt={prompt} setGptResponse={setGptResponse} />
        <Bard thePrompt={prompt} setBardResponse={setBardResponse} />
      </div>
    </div>
  );
}