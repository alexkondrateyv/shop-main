import * as ProductsActionCreators from './products';
import * as LiveSearchActionCreators from './live-search';
import * as ModalActionCreators from './modal';

export default {
  ...ProductsActionCreators,
  ...LiveSearchActionCreators,
  ...ModalActionCreators
}