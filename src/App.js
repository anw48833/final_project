import FullPage from './components/FullPage.js';
import CreateItem from './components/CreateItem.js';
import EditItem from './components/EditItem.js';
import SignUp from './components/SignUp.js';
import LogIn from './components/LogIn.js';
import Shop from './components/Shop.js';
import './fonts.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<FullPage />} />
          <Route path='/create-item' element={<CreateItem />} />
          <Route path='/edit-item/:id' element={<EditItem />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/log-in' element={<LogIn />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
