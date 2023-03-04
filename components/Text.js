import React from 'react';
import SplittedText from './SplittedText';
import TranslationTable from './TranslationTable';

const Text = ({ text }) => {
  return (
    <div className='text'>
      <TranslationTable text={text} />
    </div>
  );
}

export default Text;
