// ./react-redux-client/src/containers/App.js
import { connect } from 'react-redux';
import * as appActions from '../actions/appActions';
import AddProduct from '../components/AddProduct';
import * as productActions from '../actions/productActions';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedAppState: state.appState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedToggleAddProduct: () => dispatch(appActions.toggleAddProduct()),
    mappedAddProduct: product => dispatch(productActions.addNewProduct(product))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddProduct);
