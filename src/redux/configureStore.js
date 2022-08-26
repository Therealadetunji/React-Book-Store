import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import bookReducer from "./Books/Books";
import { addCategories } from "./Categories/Categories";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = ({
    books: bookReducer,
    categories: addCategories
});
const store = configureStore ({
    reducer: rootReducer},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
    );

export default store;