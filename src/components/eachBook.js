import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook, removeBooks } from '../redux/Books/Books';

const  ListOfBooks = (props) => {
  const {
    item_id, title,author,category
  } = props;
  const dispatch = useDispatch();

  const removeHandler = (e) =>{
    const targetId = Number(e.target.id);
    console.log(targetId);
    dispatch(deleteBook(targetId));
  };

  return (
    <div key={item_id}>
    <li>
      
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      {category}
      <button type="button" id={item_id}  className='remove button' onClick={(e) => removeHandler(e)}>Remove</button>
    </li>
    </div>
  );
}
ListOfBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default ListOfBooks;