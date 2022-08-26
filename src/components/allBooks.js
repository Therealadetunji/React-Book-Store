import React, { useEffect } from 'react';
import ListOfBooks from './eachBook'
import Form from './inputForm';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchBooks } from '../redux/Books/Books';

const Books = () => {
  const books = useSelector((state) => state.books);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchBooks());
}, []);

    return (
      <div>
        {books.map((book) => (
      <ul key={book.item_id}><ListOfBooks item_id = {book.item_id} title={book.title} author={book.author} categoty={book.category} />
        
      </ul>
        ))}
      <Form/>
    </div>
  );

};
export default Books;