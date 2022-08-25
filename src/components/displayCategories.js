import React from "react";
import { useDispatch } from "react-redux";
import { addCategories } from "../redux/Categories/Categories";

const Categories = () => {
    
    let dispatch = useDispatch();
    
    <button type="button" className="check status" onClick={() => dispatch(addCategories())}> Check Status</button>
}

export default Categories;