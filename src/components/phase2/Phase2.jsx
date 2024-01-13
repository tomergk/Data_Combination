import React, { useState, useEffect } from 'react'
import Gpt from '../gpt/Gpt'
import Bard from '../bard/Bard'
import './Phase2.css'

const Phase2 = ({ gptResponse, bardResponse }) => {

  const [combinedText, setCombinedText] = useState('');
  // let combination = '';

  useEffect(() => {
    if (gptResponse && bardResponse) {
      combine();
    }
  }, [gptResponse, bardResponse]);

  const combine = async () => {
    try {
      if (gptResponse && bardResponse) {
        const combination = `Below are two pieces of information, combine them into one piece of information that will convey a clear message, without duplication and without unclear text:
          1. ${gptResponse}
          2. ${bardResponse}`;
        setCombinedText(combination);
      }
    } 
    catch (error) {
      console.error('Error combining responses:', error);
    }
  };

  return (
    <div className='general_container'>
      <h3 style={{ color: "#FE98AD" }}>Phase 2 - Individual interpretation For The Combined data</h3>
      <div className='phase phase_two'>
        <Gpt thePrompt={combinedText} />
        <Bard thePrompt={combinedText} />
      </div>
    </div>
  )
}

export default Phase2
