import React from 'react';

//import pages
import Home from '../pages/Home';
import About from '../pages/About'
import Projects from '../pages/Projects';
import Contact from '../pages/Contact'

//import routes route & useLocation hook
import {Routes, Route, useLocation} from 'react-router-dom'


const AnimRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/projects' element={<Projects/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>);
};

export default AnimRoutes;
