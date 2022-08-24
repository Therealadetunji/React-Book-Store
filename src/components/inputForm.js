import React from "react";

const Form = () => {
    <h2 className="add a new book">
        ADD NEW BOOK
    </h2>
    return (
    <form action="#" className="form">
        <input type="text"  className="title" placeholder="Book" ></input>
        <select name="Author"   className="Author-name" >
            <option value="Author">Author</option>
            <option value="Chinua Achebe">Chinua Achebe</option>
            <option value="Daniel">Daniel</option>
        </select>
        <button type="submit" value="submit" className="button">ADD BOOK</button>
    </form>
    )
};

export default Form;