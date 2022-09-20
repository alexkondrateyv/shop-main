import React from 'react';

import { Header } from '../../components/header/header';
import { List } from '../../components/list/list';
import { Search } from '../../components/search/search';

import './main.scss';

export const Main: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <List />
    </div>
  )
}