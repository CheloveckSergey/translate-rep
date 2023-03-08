import { getData, translationService } from '@/translateAPI/api';
import React, { useState } from 'react';

import { GrClose } from 'react-icons/gr';
import { useQuery } from 'react-query';
import { useStateContext } from './StateContext';

import { MdAdd, MdOutlineAddTask } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { wordsService } from '@/sevices/WordList';
import { useWordList } from 'app/hooks/useWordList';

const PopUpWindow = () => {
  const { setShowPopUpWindow, word } = useStateContext();

  const {data, isLoading, error} = useQuery(['translateWord', word], () => {
    return translationService.translateText(word)
  });

  const { wordList, addWord, deleteWord } = useWordList();

  function isAdded() {
    if (wordList.map((wordObject) => wordObject.word).includes(word)) {
      return true;
    };
    return false;
  }

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
        {isLoading ? <p>Loading...</p> : 
        data ? <p className='outcome-word'>{data}</p> :
        <p>Something went wrong :(</p>}
        <div className='bottom-panel'>
          <button
            disabled={isAdded() ? true : false}
            className={`add ${isAdded() ? 'disabled' : ''}`}
            onClick={() => addWord(word)}
          >
            <MdAdd />
          </button>
          <button 
            disabled={isAdded() ? true : false}
            className={`add-and-close ${isAdded() ? 'disabled' : ''}`}
            onClick={() => {
              addWord(word);
              setShowPopUpWindow(false);
            }}
          >
            <MdOutlineAddTask />
          </button>
          <button 
            disabled={isAdded() ? false : true}
            className={`delete ${!isAdded() ? 'disabled' : ''}`}
            onClick={() => deleteWord(word)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpWindow;
