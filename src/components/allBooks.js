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
          <li key={book.item_id}>
         <ListOfBooks  title={book.title} author={book.author} item_id={book.item_id} category={book.category}/>
        </li>
        ))}
      </ul>
      <Form/>
    </div>
  );

};
export default Books;