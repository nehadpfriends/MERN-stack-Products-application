
const apiUrl = "/api/";

//Async action
export const fetchProducts = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchProductsRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchProductsSuccess(data.products,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchProductsFailed(error));
                    })
                  }
                })


  }
}

export const fetchProductsRequest = () => {
  return {
    type:'FETCH_PRODUCTS_REQUEST'
  }
}


//Sync action
export const fetchProductsSuccess = (products,message) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    products: products,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchProductsFailed = (error) => {
  return {
    type:'FETCH_PRODUCTS_FAILED',
    error
  }
}

export const addNewProduct = (product) => {
  return (dispatch) => {
    dispatch(addNewProductRequest(product));
    return fetch(apiUrl, {
      method:'post',
      body: product,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.product);
          dispatch(addNewProductRequestSuccess(data.product, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewProductRequestFailed(error))
        })
      }
    })
  }
}

export const addNewProductRequest = (product) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST',
    product
  }
}

export const addNewProductRequestSuccess = (product,message) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST_SUCCESS',
    product:product,
    message:message
  }
}

export const addNewProductRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_PRODUCT_REQUEST_FAILED',
    error
  }
}

export const showEditModal = (productToEdit) => {
  return {
    type: 'SHOW_EDIT_MODAL',
    product: productToEdit
  }
}

export const hideEditModal = () => {
 return {
   type: 'HIDE_EDIT_MODAL'
 }
}

export const editProduct = (productToEdit) => {
  return (dispatch) => {
    dispatch(editProductRequest(productToEdit));
    return fetch(apiUrl, {
      method:'put',
      body:productToEdit
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(editProductSuccess(data.product,data.message));
        })
      }
      else {
        response.json().then(error => {
          dispatch(editProductFailed(error));
        })
      }
    })
  }
}

export const editProductRequest = (productToEdit) => {
  return {
    type:'EDIT_PRODUCT_REQUEST',
    productToEdit
  }
}

export const editProductSuccess = (productToEdit,message) => {
 return {
   type:'EDIT_PRODUCT_SUCCESS',
   productToEdit:productToEdit,
   message:message
 }
}

export const editProductFailed = (error) => {
 return {
   type:'EDIT_PRODUCT_FAILED',
   error
 }
}

export const deleteProductModal = (productToDelete) => {
  return {
    type: "SHOW_DELETE_MODAL",
    product: productToDelete
  }
}

export const hideDeleteModal = () =>  {
  return {
    type: "HIDE_DELETE_MODAL"
  }
}

export const deleteProduct = (productToDelete) => {
  return (dispatch) => {
    dispatch(deleteProductRequest(productToDelete));
    return fetch(apiUrl + productToDelete._id, {
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteProductSuccess(data.product,data.message));
        })
      }
      else {
        response.json().then(error => {
          dispatch(deleteProductFailed(error));
        })
      }
    })
  }
}

export const deleteProductRequest = (productToDelete) => {
  return {
    type: 'DELETE_PRODUCT',
    productToDelete
  }
}

export const deleteProductSuccess = (productToDelete, message) => {
  return {
    type: 'DELETE_PRODUCT_SUCCESS',
    productToDelete: productToDelete,
    message: message
  }
}

export const deleteProductFailed = (error) => {
  return {
    type: 'DELETE_PRODUCT_FAILED',
    error
  }
}