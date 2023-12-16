import React, { useEffect, useState } from 'react';
import './Gpt.css';
import { SiOpenai } from 'react-icons/si';
import OpenAI from "openai";

export default function Gpt({ thePrompt, setGptResponse }) {
  
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
      setGptResponse(response); // send the response up back to phase1 
    } 
    catch (error) {
      console.error("Error making API request:", error);
    }
  }

  return (
    <div className='container gpt_container'>
      <h2><SiOpenai /></h2>
      <p>{gptAnswer}</p>
    </div>
  );
}
