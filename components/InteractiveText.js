import React from 'react';
import { useStateContext } from './StateContext';

const InteractiveText = ({ text }) => {
  const { setShowPopUpWindow, setWord } = useStateContext();

  function createTextMassive() {
    if (!text) return;

    let inputText = text;
    let outputMassive = [];
    const wordRegexp = /\w+/i;
    const notWordRegexp = /\W+/i;

    while (inputText.length > 0) {
      if (inputText[0].match(wordRegexp)) {
        let word = inputText.match(wordRegexp)[0];
        outputMassive.push({ span: word, class: 'word' });
        inputText = inputText.replace(wordRegexp, '');
      } else {
        let notWord = inputText.match(notWordRegexp)[0];
        outputMassive.push({ span: notWord, class: 'not-word' });
        inputText = inputText.replace(notWordRegexp, '');
      }
    };
    
    return outputMassive;
  }

  return (
    <div className='interactive-text'>
      {createTextMassive()?.map((item, index) => {
        if (item.class == 'word') {
          return (
            <span 
              class='word'
              onClick={() => {
                setShowPopUpWindow(true);
                setWord(item.span);
              }}
            >
              {item.span}
            </span>
          )
        } else {
          return <span class='not-word'>{item.span}</span>
        }
      })}
    </div>
  );
}

export default InteractiveText;
