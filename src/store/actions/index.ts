import * as ProductsActionCreators from './products';
import * as LiveSearchActionCreators from './live-search'

export default {
  ...ProductsActionCreators,
  ...LiveSearchActionCreators
}