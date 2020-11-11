import {createStore} from 'redux';
import formAppReducer from './FormAppReducer';

const store= createStore(formAppReducer);

export default store;