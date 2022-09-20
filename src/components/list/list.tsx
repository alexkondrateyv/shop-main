import React from 'react';

import { ROUTES } from '../../constants/routes';
import { filter } from '../../services/filter';

import './list.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';

export const List: React.FC = () => {
  const { data, error, loading } = useTypedSelector(state => state.products);
  const { value } = useTypedSelector(state => state.search)

  const filteredProducts = filter(data, value, 'name');

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="list">
      {filteredProducts.map(product =>
        <div key={product.id} className="list__product">
          <div className="list__product-box">
            <img src={product.imageUrl} alt="image" className="list__product-box-img" />
            <p className="list__product-box-name">{product.name}</p>
            <p className="list__product-box-count">count: {product.count}</p>
            <div>
              <a
                href={ROUTES.product}
                className="list__product-box-link"
                target="_blank"
                onClick={() => console.log(1)}
              >More info</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}