import React, { useState } from 'react';

import { FaEye } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import RedactedText from './RedactedText';
import Text from './Text';
 
const MyText = ({ title, text, deleteText, saveRedaction }) => {
  const [showText, setShowText] = useState(false);
  const [showRedactedText, setShowRedactedText] = useState(false);
  const [outputLanguage, setOutputLanguage] = useState('ru');

  return (
    <div className='my-text'>
      <div className='header'>
        <h3 className='title'>{title}</h3>
        <div className='right'>
          <p>{outputLanguage}</p>
          <FaEye onClick={() => {
            setShowRedactedText(false);
            setShowText(!showText);
          }}/>
          <FiEdit2 onClick={() => {
            setShowText(false);
            setShowRedactedText(!showRedactedText);
          }} />
          <MdDelete onClick={() => {deleteText(title)}}/>
        </div>
      </div>
      {showText && <Text text={text} outputLanguage={outputLanguage} />}
      {showRedactedText && <RedactedText 
        outputLanguage={outputLanguage} 
        title={title} 
        text={text} 
        saveRedaction={saveRedaction} 
        setOutputLanguage={setOutputLanguage}
      />}
    </div>
  );
}

export default MyText;
