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
        <Route path="https://sverine.github.io/countries-api/" element={<Home/>}/>
        <Route path="https://sverine.github.io/countries-api/a-propos" element={<About/>}/>
        <Route path="https://sverine.github.io/countries-api/news" element={<News/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;