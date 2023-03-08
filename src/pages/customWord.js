import { getData, translationService } from '@/translateAPI/api';
import TranslatedWord from 'components/TranslatedWord';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';

const CustomWord = () => {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('');

  const {data, isLoading, error, refetch} = useQuery(
    ['translateText', text],
    () => translationService.translateText(text),
    {
      enabled: false,
    }
  );

  function handleChange(e) {
    setInputText(e.target.value);
  }

  console.log(data);

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
        onClick ={() => {
          setText(inputText);
          setTimeout(() => {refetch()}, 0);
        }}
      >
        Translate
      </button>
      {isLoading ? <p>Loading...</p> : 
      data ? <p>{data}</p> : <p>Bad Data</p>}
    </div>
  );
}

export default CustomWord;