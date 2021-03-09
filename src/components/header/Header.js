import React from 'react';
import './header.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoLogoYoutube, IoMdNotifications } from 'react-icons/io';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { CgProfile, CgSearch } from 'react-icons/cg';
const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <GiHamburgerMenu size={24}/>
        <>
        <IoLogoYoutube size={24}
          className="m--l--5"/>
           Youtube
        </>
      </div>
      <div className="header__search">
        <form className="hedaer__form">
          <input type="text"
            className="header__form__input"
            placeholder="Search"/>
          <button type="submit"
            className="header__form__button">
            <CgSearch/>
          </button>
        </form>
      </div>
      <div className="header__menu">
        <BsFillGrid3X3GapFill size={24}/>
        <IoMdNotifications className="m--l--4"
          size={24}/>
        <CgProfile className="m--l--4"
         size={24} />
      </div>
    </div>
  );
};

export default Header;
