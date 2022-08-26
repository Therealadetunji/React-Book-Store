import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from './Categories/Categories';
import { bookReducer } from './Books/Books';

const rootReducer = {
  books: bookReducer,
  categories: categoriesReducer,
};
const store = configureStore({ reducer: rootReducer });

export default store;