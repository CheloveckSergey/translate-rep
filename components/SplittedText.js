import { translate } from '@/translateAPI/api';
import React, { useEffect, useState } from 'react';
import InteractiveText from './InteractiveText';

const SplittedText = ({ text }) => {
  const [splittedText, setSplittedText] = useState([]);

  async function getSplittedObjects() {
    if (!text || text == '') return;

    let inputText = text;
    let inputRussianText = await translate(text);
    // alert(inputRussianText);
    let splitsArray = [];
    const regexp = /.+?[\.\?\!]/i;
  
    while (inputText.length > 0) {
      let englishSplit = inputText.match(regexp)[0];
      let russianSplit = inputRussianText.match(regexp)[0];
      splitsArray.push({ englishSplit, russianSplit });
      inputText = inputText.replace(regexp, '');
      inputRussianText = inputRussianText.replace(regexp, '');
    }

    setSplittedText(splitsArray);
  }

  useEffect(() => {
    getSplittedObjects()
  }, []);

  return (
    <div className='table-text'>
      {splittedText.map( (sentence, index) => (<div className='row'>
        <div className='cell'>
          <InteractiveText text={sentence.englishSplit} />
        </div>
        <div className='cell'>{sentence.russianSplit}</div>
      </div>
      ))}
    </div>
  );
}

export default SplittedText;
