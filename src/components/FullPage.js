import Home from './Home.js';
import ProjHeader from './ProjHeader.js';
import Shop from './Shop.js';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

function FullPage() {
  const isLoggedin = true;
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/api/items');
      setItems(response.data);
    }
    fetchData();
  }, []);
  
  return (
    <div>
      <ProjHeader isLoggedin={isLoggedin} />
      <Home />
      <Shop item_list={items} isLoggedin={isLoggedin} />
    </div>
  );
}

export default FullPage;