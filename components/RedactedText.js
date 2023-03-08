import React, { useState } from 'react';

const RedactedText = ({ title, text, saveRedaction, outputLanguage, setOutputLanguage }) => {
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
      <p>Choose language you want text to be translated to.</p>
      <select value={outputLanguage} onChange={(e) => {setOutputLanguage(e.target.value)}}>
        <option value="en">English motherfucker do you speak it?!</option>
        <option value="ru">Russian</option>
        <option value="es">Espaniola</option>
        <option value="fr">Franch</option>
        <option value="de">German</option>
      </select>
      <p>Title</p>
      <input type="text" value={myTitle} onChange={handleTitleChange}/>
      <p>Text</p>
      <textarea value={myText} onChange={handleTextChange}></textarea><br/>
      <button onClick={() => saveRedaction(title, myTitle, myText)}>Save</button>
    </div>
  );
}

export default RedactedText;
