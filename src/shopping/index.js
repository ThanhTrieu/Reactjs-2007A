import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';
import configStore from './redux/store';

const { store } = configStore({});

const HomeComponent= lazy(() => import('./pages/home/index'));
const CartComponent= lazy(() => import('./pages/cart/index'));

const ShoppingCart = () => {
  return (
    <Provider store={store}>
      <Router>
        <Suspense
          fallback={<Skeleton active />}
        >
          <Switch>
            <Route path="/home">
              <HomeComponent/>
            </Route>
            <Route path="/cart">
              <CartComponent/>
            </Route>
            <Route exact path="/">
              <HomeComponent/>
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </Provider>
  )
}
export default ShoppingCart;