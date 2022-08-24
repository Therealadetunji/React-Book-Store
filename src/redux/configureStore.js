import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Books/Books";
import { addCategories } from "./Categories/Categories";

const rootReducer = ({
    books: bookReducer,
    categories: addCategories
});
const store = configureStore ({
    reducer: rootReducer
});

export default store;