import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from '../redux/Books/Books';
import '../App.css';
import Book from './eachBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [books.length]);

  if (books.length) {
    return (
      <ul>
        {books[0].map((book) => <Book key={book.item_id} book={book} />)}
      </ul>
    );
  }
  return (
    <>
      <h1>Loading...</h1>
    </>
  );
};

export default Books;
