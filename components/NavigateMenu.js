import React from 'react';

import { TiHome } from 'react-icons/ti';
import { IoMdSettings } from 'react-icons/io';
import { MdOutlineSegment } from 'react-icons/md';
import Link from 'next/link';

const NavigateMenu = () => {
  return (
    <div className='navigate-menu'>
      <Link href='/'>
        <button className='home-button'>
          <TiHome className='icon' size={35} />
          <h3>
            Home
          </h3> 
        </button>
      </Link>
      <div className='sections-container'>
        <Link href='/customWord'>
          <button className="section">
            Translate Word
          </button>
        </Link>
        <Link href='/customText'>
          <button className="section">
            Translate Text
          </button>
        </Link>
        <Link href='/myTexts'>
          <button className="section">
            My Texts
          </button>
        </Link>
        <Link href='/myWords'>
          <button className="section">
            My Words
          </button>
        </Link>
        <Link href='/todayList'>
          <button className="section">
            Today List
          </button>
        </Link>
      </div>
      <button>
        <IoMdSettings className='icon-but' />
      </button>
    </div>
  );
}

export default NavigateMenu;
