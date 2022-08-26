import React, { useEffect } from 'react';
import ListOfBooks from './eachBook'
import Form from './inputForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook } from '../redux/Books/Books';

const Books = () => {
  const {books} = useSelector((state) => state.books);
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchBook());
}, [dispatch]);

    return (
      <div>
      <ul>
        {books.map((book) => (
         <ListOfBooks key={book.id} title={book.title} author={book.author} id={book.id} category={book.category}/>
        ))}
      </ul>
      <Form/>
    </div>
  );

};
export default Books;