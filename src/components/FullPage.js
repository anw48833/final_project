import Home from './Home.js';
import ProjHeader from './ProjHeader.js';
import Shop from './Shop.js';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

function FullPage() {
  const [items, setItems] = useState([]);
  const [isLoggedIn, setLogInStatus] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/items');
      setItems(response.data);
    }
    fetchData();

    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus) {
      setLogInStatus(JSON.parse(storedLoginStatus));
    } else {
      checkLoginStatus();
    }

    async function checkLoginStatus() {
      const token = localStorage.getItem('auth-token');
      if (token) {
        try {
          const response = await axios.post('/api/users/tokenIsValid', null, {
            headers: { 'x-auth-token': token }
          });
          setLogInStatus(response.data);
          localStorage.setItem('isLoggedIn', JSON.stringify(response.data));
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, []);

  console.log("isLoggedIn:", isLoggedIn);

  return (
    <div>
      <ProjHeader isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus}/>
      <Home />
      <Shop item_list={items} isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default FullPage;
