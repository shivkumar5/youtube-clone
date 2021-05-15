import React from 'react';
import './sidenav.scss';
import PropTypes from 'prop-types';
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied
} from 'react-icons/md';

const Sidenav = ({ showSidenav, handleSidenavToggle }) => {
  return (
    showSidenav && <nav className={ showSidenav ? 'sidenav open' : 'sidenav close'}
      onClick={() => handleSidenavToggle(false) }>
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdSubscriptions size={23}/>
        <span>Subscription</span>
      </li>
      <li>
        <MdThumbUp size={23}/>
        <span>Liked video</span>
      </li>
      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>
      <li>
        <MdLibraryBooks size={23}/>
        <span>Library</span>
      </li>
      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>I don&apos;t know</span>
      </li>
      <li>
        <MdExitToApp size={23}/>
        <span>Log Out</span>
      </li>
    </nav>
  );
};

Sidenav.propTypes = {
  showSidenav: PropTypes.bool,
  handleSidenavToggle: PropTypes.func
};

export default Sidenav;
