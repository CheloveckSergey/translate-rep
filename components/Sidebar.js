import React, { useRef } from 'react';

import { MdOutlineSegment } from 'react-icons/md';
import NavigateMenu from './NavigateMenu';

const Sidebar = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="sidebar">
      <button 
        className='switch-button'
        onClick={() => {
          if (ref.current) {
            ref.current.classList.toggle('open-sidebar');
          }
        }}
      >
        <MdOutlineSegment className='icon-but' />
      </button>
      <NavigateMenu />
    </div>
  );
}

export default Sidebar;
