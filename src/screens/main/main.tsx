import React from 'react';

import { Header } from '../../components/header/header';
import { List } from '../../components/list/list';
import { Modal } from '../../components/modal/modal';
import { Search } from '../../components/search/search';

import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Main: React.FC = () => {
  const { isActive } = useTypedSelector(state => state.modal);

  return (
    <div className="container">
      <Header />
      <Search />
      <List />
      {isActive && <Modal />}
    </div>
  )
}