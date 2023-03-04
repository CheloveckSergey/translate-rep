import React, { useRef, useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

const AddText = ({ addText }) => {
  const [showForm, setShowForm] = useState(false);
  
  const titleRef = useRef(null);
  const textRef = useRef(null);

  return (
    <div className='add-text-container'>
      <div 
        className='add-text'
        onClick={() => {
          setShowForm(!showForm)
        }}
      >
        <p>Add Text</p>
        <AiOutlinePlus size={30}/>
      </div>
      <div className={`form-container ${showForm && 'active'}`}>
        <div className='form'>
          <p>Enter the title</p>
          <input type="text" ref={titleRef}/>
          <p>Enter the text, you want to add:</p>
          <textarea ref={textRef}></textarea>
          <button 
            className='add-text-button'
            onClick={() => {
              if (titleRef.current && textRef.current) addText(titleRef.current.value, textRef.current.value)
            }}
          >
            Add Text
          </button>
        </div>
        
      </div>
    </div>  
);
    
    
}

export default AddText;
