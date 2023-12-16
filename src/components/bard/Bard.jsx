import React, { useEffect, useState } from 'react';
import './Bard.css';
import { RiBardLine } from 'react-icons/ri';

export default function Bard({ thePrompt, setBardResponse }) {

  const [response, setResponse] = useState('');

  useEffect(() => {

    if (thePrompt) {
      transform();
    }
  }, [thePrompt]);

  async function transform() {
    try {
      const res = await fetch('http://localhost:8000/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: thePrompt }),
      });

      const resData = await res.json();
      const newRes = JSON.stringify(resData.response);
      const trimmedRes = newRes.substring(1, newRes.length - 1);

      setResponse(trimmedRes);
      setBardResponse(trimmedRes);

    } 
    catch (error) {
      console.error('Error sending request to server:', error);
    }
  }

  return (
    <div className="container bard_container">
      <h2><RiBardLine /></h2>
      <p>{response}</p>
    </div>
  );
}
