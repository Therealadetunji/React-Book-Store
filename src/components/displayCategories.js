import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './styles/Categories.css';
import { checkStatus } from '../redux/Categories/Categories';

const Categories = () => {
  const categoryStatus = useSelector((state) => state.category);
  const dispatch = useDispatch();
  return (
    <div className="categories-container">
      <p className="categoryStatus">{categoryStatus.status}</p>
      <button type="button" className="categories-btn" onClick={() => dispatch(checkStatus())}>Check status</button>
    </div>
  );
};

export default Categories;
