import React from "react";
import { v4 as uuid } from 'uuid';

const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';

const bookReducer = (books = [{
    title: 'Dancing man',
    author: 'J-hus',
    id: uuid()
},
{
    title: 'Last Last',
    author: 'burna-boy',
    id: uuid()
}
], action ) => {
    switch (action.type){
        case ADD_BOOK:
            return [
                ...books, action.books
            ];
        case REMOVE_BOOK:
            return [...books.filter ((book) => book.id !== action.books)];

        default:
            return books;
    }
};

export const addBooks = (books) => {
    return {
        type: ADD_BOOK,
        books,
    }
};

export const removeBooks = (books) => {
    return {
        type: REMOVE_BOOK,
        books,
    }
};

export default bookReducer;
