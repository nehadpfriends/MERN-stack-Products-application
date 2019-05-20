import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ProductForm = (props) => {
  return (
    <form className="form form-horizontal" id="addProductForm" onSubmit={props.addProduct}>
    <div className="row">
    <h3 className="centerAlign">Add new Product</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Product: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter product"
              name="productName"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Description of product"
                  name="productDescription"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default ProductForm;
