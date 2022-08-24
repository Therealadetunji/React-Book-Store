import React from "react";

const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

const bookReducer = (books = [], action ) => {
    switch (action.type){
        case ADD_BOOK:
            return [
                ...books, {
                    book: action.book}
            ];
        case REMOVE_BOOK:
            return books.filter ((book) => book.id !== action.id)

        default:
            return books;
    }
};

export const addBooks = (book) => {
    return {
        type: ADD_BOOK,
        book,
    }
};

export const removeBooks = (id) => {
    return {
        type: REMOVE_BOOK,
        id,
    }
};

export default bookReducer;
