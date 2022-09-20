import React, { useEffect } from 'react';
import { ROUTES } from '../../constants/routes';

import './list.scss';

import { useActions } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const List: React.FC = () => {
  const { data, error, loading } = useTypedSelector(state => state.products);

  const { fetchProducts } = useActions()

  useEffect(() => {
    fetchProducts()
  }, [])

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
      {data.map(product =>
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
              >More info</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}