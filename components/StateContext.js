import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const StateContext = ({ children }) => {
  const [showPopUpWindow, setShowPopUpWindow] = useState(false);
  const [word, setWord] = useState(null);

  return (
    <Context.Provider
      value={{
        showPopUpWindow,
        setShowPopUpWindow,
        word,
        setWord,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default StateContext;
export const useStateContext = () => useContext(Context);
