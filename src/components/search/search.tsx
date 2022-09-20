import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useAction';
import { filter } from '../../services/filter';
import './search.scss';

export const Search: React.FC = () => {
  const { fetchProducts } = useActions()
  const { updateSearch } = useActions()

  useEffect(() => {
    fetchProducts('?_sort=name')
  }, [])

  return (
    <form className="search">
      <input
        type="input"
        placeholder="Enter product name"
        className="search__input"
        onChange={(event) => {
          updateSearch(event.target.value)
        }} />
      <button
        type="button"
        className="search__btn"
        onClick={() => fetchProducts('?_sort=name')}
      >Sort by name</button>
      <button
        type="button"
        className="search__btn"
        onClick={() => fetchProducts('?_sort=count')}
      >Sort by count</button>
    </form>
  )
}