import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import ListOfBooks from './components/Books';
import Form from './components/inputForm';
import { Route, Routes } from 'react-router';
import Categories from './components/Categories';


const App = () => (
  <>
  <Navigation/>

  <Routes>
    <Route path="/" element={<ListOfBooks/>} />
    <Route path="/Books" element={<ListOfBooks/>} />
    <Route path='/Categories' element={<Categories/>} />
  </Routes>
  </>
)


export default App;
