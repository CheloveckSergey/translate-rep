import { getData } from '@/translateAPI/api';
import TranslatedWord from 'components/TranslatedWord';
import React, { useRef, useState } from 'react';

const CustomWord = () => {
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    setInputText(e.target.value);
  }

  return (
    <div className='custom-text-container'>
      <h1>Custom Word</h1>
      <p>Please, enter the word you want to have translated: </p>
      <textarea 
        className='text-input' 
        value={inputText}
        onChange={handleChange} 
      /><br/>
      <button 
        className='translate-button'
        onClick ={() => setShowTranslation(true)}
      >
        Translate
      </button>
      {showTranslation && <TranslatedWord text={inputRef.current.value} />}
    </div>
  );
}

export default CustomWord;