import React from 'react';

import './search.scss';

export const Search: React.FC = () => {
  return (
    <form className="search">
      <input 
      type="input"
      placeholder="Enter product name"
      className="search__input"
      onChange={() => {
        console.log(1)
      }} />
      <button type="button" className="search__btn">Sort by name</button>
      <button type="button" className="search__btn">Sort by count</button>
    </form>
  )
}