export interface ProductsState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum ProductsAcrionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS",
  GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR",
}

interface GetProductsAction {
  type: ProductsAcrionTypes.GET_PRODUCTS;
}
interface GetProductsActionSuccess {
  type: ProductsAcrionTypes.GET_PRODUCTS_SUCCESS;
  payload: [
    id: number,
    imageUrl: string,
    name: string,
    count: number,
    size: {
      width: number,
      height: number
    },
    weight: string,
    comments: [
      {
        id: number,
        productId: number,
        description: string,
        date: string
      }
    ]
  ]
}

interface GetProductsActionError {
  type: ProductsAcrionTypes.GET_PRODUCTS_ERROR;
  payload: string;
}

export type ProductsAction = GetProductsAction | GetProductsActionSuccess | GetProductsActionError;