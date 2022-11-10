import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Template from './Templates/Template';
// SCSS
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Template />}>
          <Route path='home' element={<Home />}></Route>
          <Route path='shop' element={<Shop />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
