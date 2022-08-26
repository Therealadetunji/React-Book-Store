import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { generate } from "randomstring";
import React from "react";
import { v4 as uuid } from 'uuid';

const ADD_BOOK = 'bookstore/Books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/Books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/Books/FETCH_BOOKS';
const FETCH_BOOK_ERROR = 'bookstore/Books/FETCH_BOOKS_ERROR';
const FETCH_BOOK_PENDING = 'bookstore/Books/FETCH_BOOKS_LOADING';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/yB1Dl3di7R2H9P4LCLMC/books/' ;
// 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iAvUGT7MFjCTmOa9BWeU/books/'
const initialState = {
    books: [{
        title: 'Dancing man',
        author: 'J-hus',
        id: generate()
    },
    {
        title: 'Last Last',
        author: 'burna-boy',
        id: generate()
    }],
    loading: false,
    error: null,
  };

const bookReducer = (state = initialState, action ) => {
    switch (action.type){
        case FETCH_BOOK_PENDING:
            return {
                ...state,
                loading: true,
            };
        case ADD_BOOK:
            return {
                ...state, 
                loading: false,
                books: [...state.books, action.payload],
            };
        case REMOVE_BOOK:
            return {...state,
                loading: false,
                books: state.books.filter((book) => book.item_id !== action.payload),
            };
            case FETCH_BOOK:
                return {
                  ...state,
                  loading: false,
                  books: action.payload,
            };
            case FETCH_BOOK_ERROR:
                return {
                  ...state,
                  loading: false,
                  error: action.payload,
            };
        default:
            return state;
    }
};

// FOR FETCHING FROM API

export const fetchBook = () => (dispatch) => {
dispatch(fetchBookPending());
    fetch(URL).then((response) => response.json()).then((data) =>{
        const newBook = [];
        Object.keys(data).forEach((key)=>{
        if(key) {
            newBook.push({
                ...data[key][0],
                item_id:key,
            });
        }
        });
        dispatch(fetchBooks(newBook));
        })
        .catch((error) => {
        dispatch(fetchBookError(error.message));
    });
};

export const postBook = (book) => (dispatch) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify((book))
    }).then(() => {
      dispatch(addBooks(book));
    });
  };

  export const deleteBook = (id) => (dispatch) => {
    fetch(`${URL}${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
    })
      .then(() => {
        dispatch(removeBooks(id));
      });
  };

// action creators
export const addBooks = (books) => {
    return {
        type: ADD_BOOK,
        payload:books,
    }
};

export const removeBooks = (id) => {
    return {
        type: REMOVE_BOOK,
        payload:id,
    }
};

export const fetchBooks = (books) =>{
    return {
        type: FETCH_BOOK,
        payload:books
    }
}

export const fetchBookPending = () => {
    return {
    type: FETCH_BOOK_PENDING,
    }
}

export const fetchBookError = (error) => {
    return {
        type: FETCH_BOOK_ERROR,
        payload: error
    }
}



export default bookReducer;