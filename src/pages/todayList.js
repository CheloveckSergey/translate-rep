import { useTodayList } from 'app/hooks/useTodayList';
import { useWordList } from 'app/hooks/useWordList';
import React, { useEffect } from 'react';

const TodayList = () => {

  const { wordList } = useWordList();

  

  return (
    <div className='today-list-container'>
      <h1>Today List</h1>
      {/* {todayList.map((wordObject, index) => <p>
        {wordObject.word}
      </p>)} */}
      {wordList.map((wordObject, index) => <p>
        {wordObject.word}
      </p>)}
    </div>
  );
}

export default TodayList;
