import React, { useState } from 'react';

const RedactedText = ({ title, text, saveRedaction }) => {
  const [myTitle, setMyTitle] = useState(title);
  const [myText, setMyText] = useState(text);

  function save() {
    console.log([title, text]);
  }

  function handleTitleChange(e) {
    setMyTitle(e.target.value);
  }

  function handleTextChange(e) {
    setMyText(e.target.value);
  }
  
  return (
    <div className='redacted-text'>
      <p>Title</p>
      <input type="text" value={myTitle} onChange={handleTitleChange}/>
      <p>Text</p>
      <textarea value={myText} onChange={handleTextChange}></textarea>
      <button onClick={() => saveRedaction(title, myTitle, myText)}>Save</button>
    </div>
  );
}

export default RedactedText;
