import { combineReducers } from 'redux';

import { liveSearchReducer } from './live-search-reducer';
import { ModalReducer } from './modal-reducer';
import { ProductsReducer } from './products-reducer';

export const rootReducer = combineReducers({
  products: ProductsReducer,
  search: liveSearchReducer,
  modal: ModalReducer,
})

export type RootState = ReturnType<typeof rootReducer>