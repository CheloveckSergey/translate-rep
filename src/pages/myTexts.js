import AddText from 'components/AddText';
import MyText from 'components/MyText';
import React, { useEffect, useState } from 'react';

const MyTexts = () => {
  const [myTexts, setMyTexts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('myTexts')) {
      setMyTexts(JSON.parse(localStorage.getItem('myTexts')));
    }
  }, []);

  function addText(title, text) {
    let newArray = [...myTexts, {title, text}];
    setMyTexts(newArray);
    localStorage.setItem('myTexts', JSON.stringify(newArray));
  }

  function saveRedaction(title, newTitle, newText) {
    let newArray = myTexts.map(textObject => {
      if (textObject.title === title) {
        console.log([newTitle, newText]);
        return {title: newTitle, text: newText}
      }
      return textObject;
    });
    setMyTexts(newArray);
    localStorage.setItem('myTexts', JSON.stringify(newArray));
  }

  function deleteText(title) {
    let newArray = myTexts.filter((textObject) => textObject.title !== title);
    setMyTexts(newArray);
    localStorage.setItem('myTexts', JSON.stringify(newArray));
  }

  return (
    <div className='my-texts'>
      <h3>My Texts</h3>
      <hr color='black'/>
      <AddText addText={addText}/>
      {myTexts?.map((textObject) => (
        <MyText title={textObject.title} text={textObject.text} deleteText={deleteText} saveRedaction={saveRedaction}/>
      ))}
    </div>
  );
}

export default MyTexts;
