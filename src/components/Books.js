import React from "react";
import Form from "./inputForm";

const ListOfBooks = () => (
    <>
    <h2 className="book-list">
        List Of Books
    </h2>

    <div className="list-display">
        <ul className="total-books">
            <li className="booklists">
                Half of a Yellow Sun by Chinua Achebe
                <button type="button" className="buttons">Remove</button>
            </li>
        </ul>
    </div>
    <Form/>
    </>
    
)

export default ListOfBooks;