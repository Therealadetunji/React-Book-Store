import React from 'react';
import PropTypes from 'prop-types';

const ListOfBooks = ({ title, author }) => {
  return (
    <li>
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      <button type="submit">Delete</button>
    </li>
  );
}
ListOfBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default ListOfBooks;
