import React from 'react';

import { ROUTES } from '../../constants/routes';

import { useActions } from '../../hooks/useAction';

import logo from '../../images/logo.png';
import './header.scss';

export const Header: React.FC = () => {
  const { turnOnModal } = useActions()

  return (
    <header className="header">
      <a href={ROUTES.main}>
        <img src={logo} alt="logo" className="header__logo" />
      </a>
      <button type="button" className="header__btn" onClick={turnOnModal}>
        Add product
      </button>
    </header>
  )
}