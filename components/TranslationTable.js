import React from 'react';

import InteractiveText from './InteractiveText';
import { useState, useEffect } from 'react';
import { translate } from '@/translateAPI/api';
import { useQuery } from 'react-query';

const TranslationTable = ({ text }) => {
  const [splittedText, setSplittedText] = useState([]);

  const {isLoading, error, data} = useQuery('text', () => {
    translate(text);
  });
  
  async function getSplittedObjects() {
    if (!text || text == '') return;

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

    setSplittedText(splitsArray);
  }

  useEffect(() => {
    getSplittedObjects()
  }, []);

  return (
    <div className='translation-table'>
      {splittedText.map( (split, index) => (<div className='row'>
        <div className='input cell'>
          <InteractiveText text={split.inputSplit} />
        </div>
        <div className='output cell'>{split.outputSplit}</div>
      </div>
      ))}
    </div>
  );
}

export default TranslationTable;
