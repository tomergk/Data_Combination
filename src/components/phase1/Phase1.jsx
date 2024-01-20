import React, { useState, useEffect } from 'react';
import Gpt from '../gpt/Gpt';
import Bard from '../bard/Bard';
import './Phase1.css';

export default function Phase1({ userInput, phase1GptResponse, phase1BardResponse }) {

  const [prompt, setPrompt] = useState('');

  useEffect(() => { // useEffect is triggered whenever the searchValue prop changes.
    if (userInput) {
      setPrompt(userInput);
    }
  }, [userInput]);

  return (
    <div className='general_container'>
      <h3 style={{ color: '#9DB2BF' }}>Phase 1 - Individual Interpretation</h3>
      <div className='phase phase_one'>
        <Gpt thePrompt={prompt} phase1GptResponse={phase1GptResponse} />
        <Bard thePrompt={prompt} phase1BardResponse={phase1BardResponse} />
      </div>
    </div>
  );
}