
const INITIAL_STATE = {
  products:[],
  product:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  productToDelete: null,
  showEditModal: false,
  productToEdit: null,
  newProduct: null
}

export  const productReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
          return {
            ...currentState,
            products:[],
            product:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'FETCH_PRODUCTS_SUCCESS':
          return {
            ...currentState,
            products:action.products,
            product:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }

    case 'FETCH_PRODUCTS_FAILED':
          return {
            ...currentState,
            products:[],
            product:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
          }
     case 'ADD_NEW_PRODUCT_REQUEST':
          return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
            newTodo: action.product
          }

    case 'ADD_NEW_PRODUCT_REQUEST_FAILED':
          return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
            newTodo: null
          }

    case 'ADD_NEW_PRODUCT_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            products:[...currentState.products, action.product],
            product:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
            newTodo: action.product
          }
        return nextState;

    case 'SHOW_EDIT_MODAL':
           return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: true,
            productToEdit: action.product,
            newTodo: null
           }
    case 'HIDE_EDIT_MODAL':
           return {
             ...currentState,
             products:currentState.products,
             product:null,
             isFetching: false,
             error: null,
             successMsg:null,
             showDeleteModal: false,
             productToDelete: null,
             showEditModal: false,
             productToEdit: null,
             newTodo: null
           }
    case 'EDIT_PRODUCT_REQUEST':
           return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: false,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: true,
            productToEdit: action.productToEdit,
            newTodo: null
           }
    case 'EDIT_PRODUCT_SUCCESS':
    const updatedProducts = currentState.products.map((product) => {
      if(product._id !== action.productToEdit._id){
        //This is not the item we care about, keep it as is
        return product;
      }
      //Otherwise, this is the one we want to return an updated value
      return { ...product, ...action.productToEdit }
    })
           return {
            ...currentState,
            products:updatedProducts,
            product:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: true,
            productToEdit: action.productToEdit,
            newTodo: null
           }
    case 'EDIT_PRODUCT_FAILED':
           return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: true,
            productToEdit: action.productToEdit,
            newTodo: null
           }

    case 'SHOW_DELETE_MODAL': 
           return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: true,
            productToDelete: action.product,
            showEditModal: false,
            productToEdit: null,
            newTodo: null
           }
    case 'HIDE_DELETE_MODAL': 
          return {
            ...currentState,
            products:currentState.products,
            product:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            productToDelete: null,
            showEditModal: false,
            productToEdit: null,
            newTodo: null
          }   
    case 'DELETE_PRODUCT': 
         return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          productToDelete: action.productToDelete,
          showEditModal: false,
          productToEdit: null,
          newTodo: null
         } 
  case 'DELETE_PRODUCT_SUCCESS': 
  const filteredProducts = currentState.products.filter((product) => product._id !== currentState.productToDelete._id)
         return {
          ...currentState,
          products:filteredProducts,
          product:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          productToDelete: action.productToDelete,
          showEditModal: false,
          productToEdit: null,
          newTodo: null
         }  
  case 'DELETE_PRODUCT_FAILED': 
         return {
          ...currentState,
          products:currentState.products,
          product:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          productToDelete: action.productToDelete,
          showEditModal: false,
          productToEdit: null,
          newTodo: null
         }  
    default:
       return currentState;

  }
}
