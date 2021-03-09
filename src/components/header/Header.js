import React from 'react';
import './header.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
const Header = () => {
  return (
    <div className="header border border-info">
      <GiHamburgerMenu/>
    </div>
  );
};

export default Header;
