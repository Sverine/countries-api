import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/countries-api/" element={<Home/>}/>
        <Route path="/countries-api/a-propos" element={<About/>}/>
        <Route path="/countries-api/news" element={<News/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;