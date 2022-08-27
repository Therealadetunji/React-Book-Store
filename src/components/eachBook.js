import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/Books/Books';

function ListOfBooks({ title, author, id }) {
  const dispatch = useDispatch();
  return (
    <li>
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      <button type="button" id={id} className='remove button' onClick={(e) => {dispatch(removeBooks(e.target.id));}}>Remove</button>
    </li>
  );
}
ListOfBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default ListOfBooks;
