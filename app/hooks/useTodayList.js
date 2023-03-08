import { useState, useEffect } from "react";
import { useWordList } from "./useWordList";

export function useTodayList() {
  const { wordList, setWordList } = useWordList();
  const [todayList, _setTodayList] = useState([]);

  useEffect(() => {
    setWordList();
  }, []);

  useEffect(() => {
    setTodayList();
  }, []);

  console.log(todayList);

  function getSortedList(wordList) {
    let newWordList = wordList;
    for (let i = 0; i < wordList.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < wordList.length; j++) {
        if (wordList[j].date < wordList[minIndex].date) {
          minIndex = j;
        }
      }
      const temporary = newWordList[i];
      newWordList[i] = newWordList[minIndex];
      newWordList[minIndex] = temporary;
    }
  }

  function setTodayList() {
    let newTodayList = [];
    let newWordList = wordList;
    let i = 0;

    while (i < 10) {
      const indexForTodayList = newWordList.findIndex((wordObject) => (
        !wordObject.watchedAt && !wordObject.inTodayList
      ));
      if (indexForTodayList === -1) {
       break;
      } else {
        newTodayList.push(newWordList[indexForTodayList]);
        newWordList[indexForTodayList] = {
          ...newWordList[indexForTodayList], inTodayList: true
        };
        i++;
      }
    };
    console.log('peq');
    _setTodayList(newTodayList);
  }

  return {todayList, setTodayList};
}