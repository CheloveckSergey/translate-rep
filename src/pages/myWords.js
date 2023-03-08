import { wordsService } from '@/sevices/WordList';
import React, { useState, useEffect } from 'react';

import { MdAdd, MdOutlineAddTask } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { useWordList } from 'app/hooks/useWordList';
import { useQuery } from 'react-query';
import { translationService } from '@/translateAPI/api';

function getStringByArray(wordList) {
  return wordList.map((wordObject) => wordObject.word).join('15151');
}

function getArrayByString(wordString) {
  return wordString.split('15151');
}

function useOutputWordList() {
  const [wordList, setWordList] = useState([]);
  const [outputWordList, setOutputWordList] = useState([]);

  const {data, isLoading, error, refetch} = useQuery(
    ['translateWords', wordList],
    () => {
      return translationService.translateText(getStringByArray(wordList));
    },
    {
      enabled: false,
      onSuccess: (data) => setOutputWordList(getArrayByString(data)),
    }
  );

  useEffect(() => {
    setWordList(wordsService.getWordList());
  }, []);

  useEffect(() => {
    if (wordList.length) {
      refetch();
    }
  }, [wordList]);

  function deleteOutputWord(index) {
    //index or word?
    const newOutputWordList = outputWordList.filter((outputWord, i) => {
      return index != i;
    });
    setOutputWordList(newOutputWordList);
  }

  return { outputWordList, isLoading, deleteOutputWord }
}


const MyWords = () => {
  const { wordList, addWord, deleteWord } = useWordList();
  const { outputWordList, isLoading, deleteOutputWord } = useOutputWordList();

  // const {data, isLoading, error, refetch} = useQuery(
  //   ['translateWordArray', wordList], 
  //   () => {
  //     return translationService.translateText(wordList.map((wordObject) => wordObject.word).join('15151'));
  //   },
  //   {
  //     enabled: false,
  //   }
  // );

  // useEffect(() => {
  //   if (wordList.length) {
  //     refetch();
  //   }
  // }, [wordList]);

  return (
    <div className='my-words-container'>
      <h1>My Words</h1>
      {isLoading ? <p>Loading...</p> :
      !outputWordList ? <p>Bad Data</p> : wordList.map((wordObject, index) => (
        <div className='word-container' key={index}>
          <div className='top'>
            <span>{wordObject.word}</span>
            <button 
              className='delete'
              onClick={() => {
                deleteWord(wordObject.word);
                deleteOutputWord(index);
              }}
            >
              <AiFillDelete />
            </button>
          </div>
          <div className='bottom'>
            {outputWordList[index]}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyWords;
