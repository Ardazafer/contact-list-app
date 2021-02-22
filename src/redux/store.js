import {createStore} from 'redux';
import contactReducer from './ContactReducer';

const store = createStore(contactReducer);

export default store;
