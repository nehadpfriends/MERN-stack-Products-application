import React from 'react';
import './App.css';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProductForm from './ProductForm';

export default class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.toggleAddProduct = this.toggleAddProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
      }
    toggleAddProduct(e){
        e.preventDefault();
         this.props.mappedToggleAddProduct();
      }
      addProduct(e) {
         e.preventDefault();
         const form = document.getElementById('addProductForm');
         if(form.productName.value !== ""  && form.productDescription.value !== ""){
            const data = new FormData();
           data.append('productName', form.productName.value);
            data.append('productDescription', form.productDescription.value);
            this.props.mappedAddProduct(data);
          form.reset();
          }
          else{
            return ;
          }
      }
    render() {
        const appState = this.props.mappedAppState;
        return (
            <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Mern Stack Product List App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddProduct}>
         <NavItem eventKey={1}>Add Product</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddProduct &&
    <ProductForm addProduct={this.addProduct} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
        )
    }
}