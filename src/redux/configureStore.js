import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './Categories/Categories';
import booksReducer from './Books/Books';

const rootReducer = combineReducers({
  books: booksReducer,
  category: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
