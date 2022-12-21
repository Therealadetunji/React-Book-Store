import React from 'react';
import './App.css';
import Navigation from './components/Navbar';
import { Route, Routes } from 'react-router';
import Categories from './components/displayCategories';
import Books  from './components/allBooks';


const App = () => (
  <>
  <Navigation/>
  <Routes>
    <Route path="/" element={<Books/>} />
    <Route path="/Books" element={<Books/>} />
    <Route path='/Categories' element={<Categories/>} />
  </Routes>
  </>
)


export default App;
