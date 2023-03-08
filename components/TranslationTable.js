import React from 'react';

import InteractiveText from './InteractiveText';
import { useState, useEffect } from 'react';
import { translationService } from '@/translateAPI/api';
import { useQuery } from 'react-query';

const TranslationTable = ({ text, outputLanguage }) => {
  const [splittedText, setSplittedText] = useState([]);

  const {isLoading, error, data} = useQuery(['translateText', text, outputLanguage], () => {
    return translationService.translateTextToLanguage(text, outputLanguage);
  });
  
  function getSplittedObjects() {
    if (!text || text == '') return undefined;
    if (!data) return undefined;
    console.log(text);
    console.log(data);
    let inputText = text;
    let outputText = data;
    // alert(outputText);
    let splitsArray = [];
    const regexp = /.+?[\.\?\!]/i;
  
    while (inputText.length > 0) {
      let inputSplit = inputText.match(regexp)[0];
      let outputSplit = outputText.match(regexp)[0];
      splitsArray.push({ inputSplit, outputSplit });
      inputText = inputText.replace(regexp, '');
      outputText = outputText.replace(regexp, '');
    }

    // setSplittedText(splitsArray);
    console.log(splitsArray);
    return splitsArray;
  }

  // useEffect(() => {
  //   getSplittedObjects()
  // }, []);

  return (
    <div className='translation-table'>
      {isLoading ? <p>Loading...</p> : 
      getSplittedObjects().map( (split, index) => (<div className='row'>
        <div className='input cell'>
          <InteractiveText text={split.inputSplit} />
        </div>
        <div className='output cell'>{split.outputSplit}</div>
      </div>
      ))}
      {/* {isLoading ? <p>Loading...</p> : <p>{text}</p>} */}
    </div>
  );
}

export default TranslationTable;
