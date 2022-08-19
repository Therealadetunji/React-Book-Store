import React from "react";

const Form = () => (
    <>
    <h2 className="add a new book">
        ADD NEW BOOK
    </h2>
    <form action="#" className="form">
        <input type="text" value="book-title" className="title" placeholder="Book"></input>
        <select name="Author" value="Author"  className="Author-name">
            <option value="Author">Author</option>
            <option value="Chinua Achebe">Chinua Achebe</option>
            <option value="Daniel">Daniel</option>
        </select>
        <button type="button" value="submit" className="button">ADD BOOK</button>
    </form>
    </>
)

export default Form;