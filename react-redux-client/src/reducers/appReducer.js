// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
    showAddProduct: false
  }
  
  const appReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'TOGGLE_ADD_PRODUCT':
            return {
              ...currentState,showAddProduct: !currentState.showAddProduct
            }
  
  
      default:
         return currentState;
  
    }
  }
  
  export default appReducer;
  