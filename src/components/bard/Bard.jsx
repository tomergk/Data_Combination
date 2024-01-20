import React, { useEffect, useState } from 'react';
import './Bard.css';
import { RiBardLine } from 'react-icons/ri';
import whilebard from '../../assets/images/while_bard.gif';

export default function Bard({ thePrompt, phase1BardResponse }) {

  const [loading, setLoading] = useState(false);
  const [bardAnswer, setResponse] = useState('');
  const [flag, setFlag] = useState(false); // To fix the "" problem: false on phase1, true on phase2

  useEffect(() => {

    if (thePrompt) {
      transform();
    }
  }, [thePrompt]);

  async function transform() {
    try {

      setLoading(true); // Set loading to true when starting the API request

      const res = await fetch('http://localhost:8000/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: thePrompt }),
      });

      const resData = await res.json();
      const newRes = JSON.stringify(resData.response);

      if (!flag) {
        let trimmedRes = newRes.substring(1, newRes.length - 1);
        setResponse(trimmedRes);
        phase1BardResponse(trimmedRes);
        setFlag(!flag);
      }
      else {
        setResponse(newRes);
        phase1BardResponse(newRes);
        setFlag(!flag);
      }
    }
    catch (error) {
      console.error('Error sending API request to server:', error);
    }
    finally {
      setLoading(false); // Set loading to false after the API request, regardless of success or failure
    }
  }

  return (
    <div className="container bard_container">
      <h2><RiBardLine /></h2>
      {loading ? (
        <img className='while' src={whilebard} alt="Loading..." />
      ) : (
        <p>{bardAnswer}</p>
      )}
    </div>
  );
}
