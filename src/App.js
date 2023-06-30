
import React from 'react';
//import components
import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';

//import router
import {BrowserRouter as Router} from 'react-router-dom'

//import motion
import {motion} from 'framer-motion'

const App = () => {
  return (
    <main className=''>
    <Router>
      <Header className='font-primary'/>
      <AnimRoutes/>
    </Router>
    </main>
  )
};

export default App;
