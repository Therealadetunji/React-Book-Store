import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBooks } from '../redux/Books/Books';

const  ListOfBooks = (props) => {
  const {
    id, title,author,category
  } = props;
  const dispatch = useDispatch();

  const removeHandler = () =>{
    dispatch(deleteBook());
  };

  return (
    <li>
      
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      {category}
      <button type="button"   className='remove button' onClick={removeHandler}>Remove</button>
    </li>
  );
}
ListOfBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default ListOfBooks;