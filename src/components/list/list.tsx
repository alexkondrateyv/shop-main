import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useActions } from '../../hooks/useAction';
import { filter } from '../../services/filter';

import './list.scss';

import { useTypedSelector } from '../../hooks/useTypedSelector';

export const List: React.FC = () => {
  const { data, error, loading } = useTypedSelector(state => state.products);
  const { value } = useTypedSelector(state => state.search);

  const { fetchProducts } = useActions();

  const filteredProducts = filter(data, value, 'name');

  useEffect(() => {
    console.log(data)
  }, [data])

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
      {filteredProducts.map(elem =>
        <div key={elem.id} className="list__product">
          <div className="list__product-box">
            <img src={elem.imageUrl} alt="image" className="list__product-box-img" />
            <p className="list__product-box-name">{elem.name}</p>
            <p className="list__product-box-count">count: {elem.count}</p>
            <Link
              to={`${ROUTES.product}/${elem.id}`}
              onClick={() => {
                fetchProducts(`?id=${elem.id}`)
              }}>
              More info
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}