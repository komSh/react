import countReducer from './counter';
import logReducer from './isLogged'; 
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter : countReducer,
    isLogged  : logReducer

})

export default allReducers;