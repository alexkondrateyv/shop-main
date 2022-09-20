import axios from "axios";

import { Dispatch } from "redux";

import { BASE_URL } from "../../constants/URL";

import { ProductsAcrionTypes, ProductsAction } from "../../types/products";

export const fetchProducts = (flag: string) => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({ type: ProductsAcrionTypes.GET_PRODUCTS })
      const response = await axios.get(BASE_URL + flag)
      dispatch({ type: ProductsAcrionTypes.GET_PRODUCTS_SUCCESS, payload: response.data })
    } catch {
      dispatch({
        type: ProductsAcrionTypes.GET_PRODUCTS_ERROR,
        payload: 'Something goes wrong!'
      })
    }
  }
}