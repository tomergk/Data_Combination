import React, { useState } from 'react';
import Header from './components/header/Header';
import Description from './components/description/Description';
import Search from './components/search/Search';
import Phase1 from './components/phase1/Phase1';
import Phase2 from './components/phase2/Phase2';
import Footer from './components/footer/Footer';

const App = () => {

  const [userInput, setUserInput] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [bardResponse, setBardResponse] = useState('');


  const handleUserInputChange = async (value) => {
    setUserInput(value);
  };

  const handleGptResponse = async (value) => {
    setGptResponse(value);
  };

  const handleBardResponse = async (value) => {
    setBardResponse(value);
  };


  return (
    <>
      <Header />
      <Description />
      {/* The equal sign between onUserInputChange and {handleUserInputChange} is not an assignment 
      in the sense of setting one variable equal to another. Instead, it's used to pass down a function 
      as a prop from the parent (App) component to the child (Search) component. 
      The purpose is to enable communication between the two components. */}
      <Search
        onUserInputChange={handleUserInputChange} />
      <Phase1
        userInput={userInput}
        setGptResponse={handleGptResponse}
        setBardResponse={handleBardResponse}
      />
      <Phase2
        gptResponse={gptResponse}
        bardResponse={bardResponse} />
      <Footer />
    </>
  );
};

export default App;
