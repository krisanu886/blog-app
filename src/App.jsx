import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='container'>
      
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        
      
    </div>
  );
};

export default App;
