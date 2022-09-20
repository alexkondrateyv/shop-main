export interface ProductState {
  data: any[];
  loading: boolean;
  error: null | string;
}

export enum ProductAcrionTypes {
  GET_PRODUCT = "GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_ERROR = "GET_PRODUCT_ERROR",
}

interface GetProductAction {
  type: ProductAcrionTypes.GET_PRODUCT;
}
interface GetProductActionSuccess {
  type: ProductAcrionTypes.GET_PRODUCT_SUCCESS;
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

interface GetProductActionError {
  type: ProductAcrionTypes.GET_PRODUCT_ERROR;
  payload: string;
}

export type ProductAction = GetProductAction | GetProductActionSuccess | GetProductActionError;