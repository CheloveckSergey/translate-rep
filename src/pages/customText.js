import { getData } from '@/translateAPI/api';
import InteractiveText from 'components/InteractiveText';
import SplittedText from 'components/SplittedText';
import React, { useRef, useState } from 'react';

const CustomText = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [text, setText] = useState(null);

  const inputRef = useRef(null);

  function showText() {
    if (!inputRef.current) {
      return;
    }
    setText(inputRef.current.value);
  }

  return (
    <div className='custom-text-container'>
      <h1>Custom Text</h1>
      <p>Please, enter the text you want to have translated: </p>
      <textarea ref={inputRef} className='text-input' type="text" /><br/>
      <button 
        className='translate-button'
        onClick={() => {showText()}}
      >
        Enter Text
      </button>
      <div>
        <div className='splitted-text-container'>
          { text && <SplittedText text={text} />}
        </div>
      </div>
    </div>
  );
}

export default CustomText;
