import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './comments.scss';

export const Comments: React.FC = () => {
  const { data } = useTypedSelector(state => state.products);
  
  return (
    <div className="comments">
      <h1 className="comments__head">Comments:</h1>
      {data[0]?.comments.map(item =>
        <div className="comments__item" key={item.id}>
          <p className="comments__item-description">{item.description}</p>  
        </div>
      )}
    </div>
  )
}