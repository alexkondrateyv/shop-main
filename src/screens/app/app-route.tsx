import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Main } from '../main/main';

import { ROUTES } from '../../constants/routes';

export const RouteApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.main} element={<Main/>} />
    </Routes>
  </BrowserRouter>
);