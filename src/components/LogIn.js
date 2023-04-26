import './LogIn.css';
import React,{useState,useContext}from "react";
import {Alert} from "react-bootstrap";
import axios from "axios";
import userContext from "../context/UserContext";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

function LogIn(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();
  const{setUserData}=useContext(userContext);

  async function handleSubmit(e){
    e.preventDefault();
    console.log("Inside");
    setLoading(true);
    try{
      const loginUser = {username,password};
      const loginRes = await axios.post("/api/users/log-in", loginUser)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token",loginRes.data.token);
      props.handleClickLI();
      navigate('/');
    }catch(err){
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return(
      <div className='create-page'>
        <div className='create-container'>
        <form onSubmit={handleSubmit}>
              <h2>Log In</h2>
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={e=>setUsername(e.target.value)}
                  required
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  required
                />
              <button disabled={loading} className='submit-button' type="submit">Log In</button>
              {error && <Alert id="Error" variant="danger">{error}</Alert>}
              
              <div className="signup">Don't have an account? <b><Link to='/sign-up'>Sign up</Link></b> here.</div>
          </form>
        </div>
      </div>
  );
}
export default LogIn;