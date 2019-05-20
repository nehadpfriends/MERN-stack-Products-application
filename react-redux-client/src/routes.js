// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Products from './containers/Products';
import AddProduct from './containers/AddProduct';

export default (
  <Route path="/" component={AddProduct}>
     <IndexRoute  component={Products}/>
  </Route>
)
