import React from 'react';

import { Header } from '../../components/header/header';
import { Mouse } from '../../components/mouse/mouse';
import { Comments } from '../../components/comments/comments';
import { Modal } from '../../components/modal/modal';

import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Product: React.FC = () => {
  const { isActive } = useTypedSelector(state => state.modal);

  return (
    <div className="container">
      <Header />
      <Mouse />
      <Comments />
      {isActive && <Modal />}
    </div>
  )
}