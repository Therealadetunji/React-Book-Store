import React from 'react';
import ListOfBooks from './eachBook'
import Form from './inputForm';

const Books = () => {
  const books = [{ title: 'Half of a yellow sun', author: 'Chinua Achebe', id: 1 },
    { title: 'Dizzy Angel', author: 'arnold', id: 2 },
  ];
  return (
    <div>
      <ul>
        {books.map((book) => (
          <ListOfBooks key={book.id} title={book.title} author={book.author} />
        ))}
      </ul>
      <Form/>
    </div>
  );
};
export default Books;