import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookFetch} from '../redux/Books/Books';

const  ListOfBooks = ({ item_id, title, author }) => {
  
  const dispatch = useDispatch();

  const removeHandler = (e) =>{
    const targetId = Number(e.target.id);
    dispatch(deleteBookFetch(targetId));
  };

  return (
    <li key={item_id}>
      {title}
      {' '}
      by
      {' '}
      {author}
      {' '}
      <button type="button" id={item_id} className='remove button'  onClick={(e) => removeHandler(e)}>Remove</button>
    </li>
  );
}
ListOfBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default ListOfBooks;