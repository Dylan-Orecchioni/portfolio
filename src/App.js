import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/Contact';
import CV from './pages/CV';
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cv' element={<CV />} />
          <Route path='/competences' element={<Knowledges />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;