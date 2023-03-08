import React from 'react';
import SplittedText from './SplittedText';
import TranslationTable from './TranslationTable';

const Text = ({ text, outputLanguage }) => {
  return (
    <div className='text'>
      <TranslationTable text={text} outputLanguage={outputLanguage} />
    </div>
  );
}

export default Text;
