import React, { useState } from 'react';
import Footer from './Footer';

import Header from './Header';
import PopUpWindow from './PopUpWindow';
import Sidebar from './Sidebar';
import { useStateContext } from './StateContext';

const Layout = ({ children }) => {
  const { showPopUpWindow } = useStateContext();

  return (
    <div className='layout-container'>
      <div className='layout'>
        <header>
          <Header />
        </header>
        <Sidebar />
        <div className="main-footer-container">
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
      {showPopUpWindow && <PopUpWindow/>}
    </div>
  );
}

export default Layout;
