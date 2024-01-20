import React, { useEffect, useState } from 'react';
import './Gpt.css';
import { SiOpenai } from 'react-icons/si';
import OpenAI from "openai";
import while_gpt from '../../assets/images/while_gpt.gif';

export default function Gpt({ thePrompt, phase1GptResponse }) {
  
  const [loading, setLoading] = useState(false);
  const [gptAnswer, setGptAnswer] = useState('');

  useEffect(() => {
    if (thePrompt) {
      transform();
    }
  }, [thePrompt]);

  /* This method takes takes current user's prompt and send it in 
  an the API request, and saves the resposne */
  async function transform() {

    try {

      setLoading(true); // Set loading to true when starting the API request
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_GPT_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: thePrompt }],
        model: "gpt-3.5-turbo",
      });
      
      let response = chatCompletion.choices[0].message.content;
      setGptAnswer(response);   // asign current response to gptAnswer 
      phase1GptResponse(response); // send the response up back to phase1 
    } 
    catch (error) {
      console.error("Error sending API request to server:", error);
    }
    finally {
      setLoading(false); // Set loading to false after the API request, regardless of success or failure
    }
  }

  return (
    <div className='container gpt_container'>
      <h2><SiOpenai /></h2>
      {loading ? (
        <img className='while' src={while_gpt} alt="Loading..." />
      ) : (
        <p>{gptAnswer}</p>
      )}
    </div>
  );
}
