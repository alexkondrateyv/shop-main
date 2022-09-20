import React from 'react';

import './header.scss';
import { ROUTES } from '../../constants/routes';

import logo from '../../images/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <a href={ROUTES.main}>
        <img src={logo} alt="logo" className="header__logo" />
      </a>
      <button type="button" className="header__btn">
        Add product
      </button>
    </header>
  )
}