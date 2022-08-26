import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import  { addBooks, postBook } from "../redux/Books/Books";
import { v4 as  uuidv4 } from 'uuid';

const Form = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');


    const newBooks = (e) => {
        e.preventDefault();
         const bookInfo = {item_id: uuidv4(), title, author, category};
         dispatch(postBook(bookInfo));

         setTitle('');
         setAuthor('');
         setCategory('')
    }


    <h2 className="add a new book">
        ADD NEW BOOK
    </h2>
    return (
    <form  className="form" >
        <input type="text"  className="title" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)} ></input>
        <input type="text"  className="author" value={author} placeholder="author" onChange={(e) => setAuthor(e.target.value)} ></input>
        <button type="submit" value="submit" className="button" onClick={newBooks} >ADD BOOK</button>
    </form>
    )
};

export default Form;