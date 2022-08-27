import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
    <div className="navigation">
        <nav className="navbar">
        <Link to="/">
        <h1 className="Bookstore">Bookstore</h1>
        </Link>
        <Link to="Books" className="book-click">Books</Link>
        <Link to="Categories" className="cat-click">Categories</Link>
    </nav>
    <div>
        photograph icon
    </div>
    </div>
    
)

export default Navigation;