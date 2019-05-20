
import React from 'react';
import { Alert, Glyphicon, Button, Modal } from 'react-bootstrap';
import ProductEditForm from './ProductEditForm';

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditProduct = this.submitEditProduct.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteProduct = this.cofirmDeleteProduct.bind(this);
  }

  showEditModal(productToEdit) {
    this.props.mappedshowEditModal(productToEdit);
  }
  hideEditModal() {
    this.props.mappedhideEditModal();
  }
  submitEditProduct(e) {
    e.preventDefault();
    const editForm = document.getElementById('EditProductForm');
    const productData = this.props.mappedproductState;
    if (editForm.productName.value !== "") {
      const data = new FormData();
      data.append('id', productData.productToEdit._id);
      data.append('productName', editForm.productName.value);
      data.append('productDescription', editForm.productDescription.value);
      this.props.mappedEditProduct(data);
    }
    else {
      return;
    }
  }
  showDeleteModal(productToDelete) {
    this.props.mappedShowDeleteModal(productToDelete);
  }
  hideDeleteModal() {
    this.props.mappedHideDeleteModal();
  }
  cofirmDeleteProduct() {
    this.props.mappedConfirmDeleteProduct(this.props.mappedproductState.productToDelete);
  }
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const productState = this.props.mappedproductState;
    const products = productState.products;
    const editProduct = productState.productToEdit;
    return (
      <div className="col-md-12">
        <h3 className="centerAlign">Products</h3>
        {!products && productState.isFetching &&
          <p>Loading products....</p>
        }
        {products.length <= 0 && !productState.isFetching &&
          <p>No Products Available. Add A Product to List here.</p>
        }
        {products && products.length > 0 && !productState.isFetching &&
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Description</th>
                <th></th>
              </tr></thead>
            <tbody>
              {products.map((product, i) => <tr key={i}>
                <td className="text-capitalize">{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>
                  <Button onClick={() => this.showEditModal(product)} bsStyle="info" bsSize="xsmall">
                  <Glyphicon glyph="pencil" /></Button>
                  <Button className="ml-1" onClick={() => this.showDeleteModal(product)} bsStyle="info" bsSize="xsmall">
                  <Glyphicon glyph="trash" /></Button>
                  </td>
              </tr>)
              }
            </tbody>
          </table>
        }
        {/* Modal for editing product */}
        <Modal
          show={productState.showEditModal}
          onHide={this.hideEditModal}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Edit Your Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-md-12">
              {editProduct &&
                <ProductEditForm productData={editProduct} editProduct={this.submitEditProduct} />
              }
              {editProduct && productState.isFetching &&
                <Alert bsStyle="info">
                  <strong>Updating...... </strong>
                </Alert>
              }
              {editProduct && !productState.isFetching && productState.error &&
                <Alert bsStyle="danger">
                  <strong>Failed. {productState.error} </strong>
                </Alert>
              }
              {editProduct && !productState.isFetching && productState.successMsg &&
                <Alert bsStyle="success">
                   <strong> {editProduct.productName} </strong>{productState.successMsg}
                </Alert>
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideEditModal}>Close</Button>
          </Modal.Footer>
        </Modal>

        {/*Modal to Delete Product */}
        <Modal show={productState.showDeleteModal}
        onHide={this.hideDeleteModal}
        container={this}
        aria-labelledby="contained-modal-title">
           <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Delete Your Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
    {productState.productToDelete && !productState.error && !productState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this Product <strong className="text-capitalize">{productState.productToDelete.productName} </strong> ?
</Alert>
    }
    {productState.productToDelete && productState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{productState.error} </strong>
</Alert>
    }

    {productState.productToDelete && !productState.error && productState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!productState.productToDelete && !productState.error && !productState.isFetching&&
      <Alert bsStyle="success">
 Product <strong>{productState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!productState.successMsg && !productState.isFetching &&
       <div>
       <Button onClick={this.cofirmDeleteProduct}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {productState.successMsg && !productState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
        </Modal>

      </div>
    );
  }
}
