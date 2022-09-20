import React from 'react';

import { Header } from '../../components/header/header';
import { Mouse } from '../../components/mouse/mouse';
import { Comments } from '../../components/comments/comments';

import './product.scss';

export const Product: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Mouse />
      <Comments />
    </div>
  )
}