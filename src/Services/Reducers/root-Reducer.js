

import { combineReducers } from 'redux';
import setUserData from './setUserData-Reducer';
import AllProducts from './getAllProductsData-Reducer';
import Product from './getSingleProductData-Reducer';

export const rootReducer = combineReducers({
    setUserData, AllProducts, Product
});