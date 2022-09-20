import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Main } from '../main/main';
import { Product } from '../product/product';

import { ROUTES } from '../../constants/routes';

export const RouteApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main} element={<Main />} />
        <Route path={`${ROUTES.product}/:id`} element={<Product />} />
        <Route path={ROUTES.error} element={<div>ERROR</div>} />
      </Routes>
    </BrowserRouter>
  );
}