import React from 'react';

import './main.scss';
import { Header } from '../../components/header/header';

export const Main: React.FC = () => {
  return (
    <div className="container">
      <Header />
    </div>
  )
}