import './App.css';
import FullPage from './components/FullPage.js';
import CreateItem from './components/CreateItem.js';
import EditItem from './components/EditItem.js';
import SignUp from './components/SignUp.js';
import LogIn from './components/LogIn.js';
import Shop from './components/Shop.js';
import ProjHeader from './components/ProjHeader.js';
import './fonts.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import UserContext from './context/UserContext';
import Item from './components/Item';


function App() {
  const [isLoggedIn, setLogInStatus] = useState(false);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [_id, set_Id] = useState("");

  function handleClickLI(){
    setLogInStatus(true);
  }
  const[userData, setUserData]=useState({
    token:undefined,
    user:undefined,
  });
  useEffect(()=>{
    const checkLoggedIn=async()=>{
      let token=localStorage.getItem("auth-token");
      if(token===null){
        localStorage.setItem("auth-token","");
      }
      const tokenResponse=await axios.post(
        "/tokenIsValid",
        null,
        {headers:{"x-auth-token": token}}
      );
      if(tokenResponse.data){
        const userRes=await axios.get("/",{
          headers:{"x-auth-token":token},
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();

    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items/');
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchItems();
  },[]);
  
  return (
    <UserContext.Provider value={{userData,setUserData}}>
      <Router>
        <ProjHeader isLoggedIn={isLoggedIn} setLogInStatus={setLogInStatus} />
        <div>
          <Routes>
            <Route exact path='/' element={<FullPage isLoggedIn={isLoggedIn} />} />
            <Route path='/create-item' element={<CreateItem />} />
            <Route path='/edit-item/:id' element={<EditItem />} />
            <Route path='/sign-up' element={<SignUp handleClickLI={handleClickLI} />} />
            <Route path='/log-in' element={<LogIn handleClickLI={handleClickLI} />} />
            <Route path='/shop' element={<Shop />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
