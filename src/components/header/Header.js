import React from 'react';
import { useHistory } from 'react-router-dom';
import './header.scss';
import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogoYoutube, IoMdNotifications } from 'react-icons/io';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { CgProfile, CgSearch } from 'react-icons/cg';
const Header = ({ handleSidenavToggle }) => {
  const history = useHistory();
  const submitQuery = () => {
    history.push('/search');
  };
  return (
    <div className="header">
      <div className="header__logo">
        <GiHamburgerMenu size={24}
          onClick = { () => handleSidenavToggle(false) }
          style={{ cursor: 'pointer' }}/>
        <>
        <IoLogoYoutube size={24}
          onClick = {() => history.push('/')}
          style={{ marginLeft: 20, cursor: 'pointer' }}/>
           Youtube
        </>
      </div>
      <div className="header__search">
        <form className="header__form">
          <input type="text"
            className="header__form__input"
            placeholder="Search"/>
          <button
            type="button"
            onClick={submitQuery}
            className="header__form__button">
            <CgSearch size={22}/>
          </button>
        </form>
      </div>
      <div className="header__menu">
        <BsFillGrid3X3GapFill size={24}
          style={{ cursor: 'pointer' }}/>
        <IoMdNotifications style={{ marginLeft: 16, cursor: 'pointer' }}
          size={24}/>
        <CgProfile style={{ marginLeft: 16, cursor: 'pointer' }}
         size={24} />
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSidenavToggle: PropTypes.func
};

export default Header;
