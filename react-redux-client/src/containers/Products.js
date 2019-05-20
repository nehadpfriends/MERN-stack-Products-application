import { connect } from 'react-redux';
import * as productActions from '../actions/productActions';
import Products from '../components/Products';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedproductState: state.productState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchProducts: () => dispatch(productActions.fetchProducts()),
    mappedshowEditModal: (productToEdit) => dispatch(productActions.showEditModal(productToEdit)),
    mappedhideEditModal: () => dispatch(productActions.hideEditModal()),
    mappedEditProduct: (productToEdit) => dispatch(productActions.editProduct(productToEdit)),
    mappedShowDeleteModal: (productToDelete) => dispatch(productActions.deleteProductModal(productToDelete)),
    mappedHideDeleteModal: () => dispatch(productActions.hideDeleteModal()),
    mappedConfirmDeleteProduct: (productToDelete) => dispatch(productActions.deleteProduct(productToDelete))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);
