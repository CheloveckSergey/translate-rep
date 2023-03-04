import { getData } from '@/translateAPI/api';
import React, { useState } from 'react';

import { GrClose } from 'react-icons/gr';
import { useStateContext } from './StateContext';

const PopUpWindow = () => {
  const { setShowPopUpWindow, word } = useStateContext();

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  getData(word, setData, setIsLoading, setError);

  return (
    <div className='pop-up-window-container'>
      <div className='pop-up-window'>
        <button 
          className='close'
          onClick={() => {setShowPopUpWindow(false)}}
        >
          <GrClose size={35}/>
        </button>
        <p className='income-word'>{word}</p>
        <p className='outcome-word'>{data?.translated_text}</p>
      </div>
    </div>
  );
}

export default PopUpWindow;
