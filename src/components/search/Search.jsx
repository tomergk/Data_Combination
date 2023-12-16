import React, { useState } from 'react';
import './Search.css';

export default function Search({ onUserInputChange }) {
    
    const [userPrompt, setuserPrompt] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const data = event.target[0].value;
        setuserPrompt('');
        onUserInputChange(data);
    }

    return (
        <div className='general_container'>
            <div className='search_container'>
                <form onSubmit={handleSubmit}>
                    <textarea
                        type='text'
                        value={userPrompt}
                        onChange={(e) => setuserPrompt(e.target.value)}
                        className='searchArea'
                        placeholder='Insert text'
                        required
                        cols='100'
                        rows='5'
                    ></textarea>
                    <button
                        disabled={userPrompt.length === 0}
                        type='submit'
                        className='btn'
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
