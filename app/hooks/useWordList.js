import { wordsService } from "@/sevices/WordList";
import { useEffect, useState } from "react";

export function useWordList() {
  const [wordList, _setWordList] = useState([]);

  useEffect(() => {
    _setWordList(getWordListFromLS());
  }, []);

  function getWordListFromLS() {
    if (localStorage.getItem('wordList')) {
      return JSON.parse(localStorage.getItem('wordList'))
    } else {
      return []
    }
  }

  function setWordList(wordArray) {
    localStorage.setItem('wordList', JSON.stringify(wordArray));
    _setWordList(wordArray);
  }

  function addWord(word) {
    let wordList = getWordListFromLS();
    wordList.push({word, date: Date.now()});
    setWordList(wordList);
  }

  function deleteWord(word) {
    const wordList = getWordListFromLS();
    const newWordList = wordList.filter((wordObject) => {
      return wordObject.word != word;
    });
    setWordList(newWordList);
  }

  return { wordList, addWord, deleteWord, setWordList } ;
}