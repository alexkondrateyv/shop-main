import { ProductsState, ProductsAcrionTypes, ProductsAction } from '../../types/products';

const defaultState: ProductsState = {
  data: [],
  loading: false,
  error: null,
}

export const ProductsReducer = (state: ProductsState = defaultState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case ProductsAcrionTypes.GET_PRODUCTS:
      return { loading: true, error: null, data: [] }
    case ProductsAcrionTypes.GET_PRODUCTS_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ProductsAcrionTypes.GET_PRODUCTS_ERROR:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}