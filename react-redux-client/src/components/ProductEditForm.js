
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const ProductEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditProductForm" onSubmit={props.editProduct}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Product: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter product"
              name="productName" defaultValue={props.productData.productName}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="productDescription" defaultValue={props.productData.productDescription}
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

export default ProductEditForm;
