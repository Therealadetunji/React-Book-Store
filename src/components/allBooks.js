import React from 'react';
import ListOfBooks from './eachBook'
import Form from './inputForm';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.books);



  return (
    <div>
      <ul>
        {books.map((book) => (
          <ListOfBooks key={book.id} title={book.title} author={book.author} id={book.id}/>
        ))}
      </ul>
      <Form/>
    </div>
  );
};
export default Books;