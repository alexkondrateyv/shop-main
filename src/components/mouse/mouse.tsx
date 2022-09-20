import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './mouse.scss';

export const Mouse: React.FC = () => {
  const { data, error, loading } = useTypedSelector(state => state.products);;

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
    <>
      <div className="mouse">
        <img src={data[0]?.imageUrl} alt="image" className="mouse__img" />
        <div className="mouse__info">
          <p className="mouse__info-name">{data[0]?.name}</p>
          <p className="mouse__info-size">size: {data[0]?.size.height}x{data[0]?.size.width} (mm)</p>
          <p className="mouse__info-weight">weight: {data[0]?.weight}</p>
          <p className="mouse__info-count">count: {data[0]?.count}</p>
          <Link to={ROUTES.main} className="mouse__info-link">← back to list</Link>
        </div>
      </div>
    </>
  )
}