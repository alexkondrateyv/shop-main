import { combineReducers } from 'redux';

import { liveSearchReducer } from './live-search-reducer';
import { ProductsReducer } from './products-reducer';

export const rootReducer = combineReducers({
  products: ProductsReducer,
  search: liveSearchReducer,
})

export type RootState = ReturnType<typeof rootReducer>