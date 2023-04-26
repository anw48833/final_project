import './SignUp.css'
import React,{useState,useContext}from "react";
import {Alert} from "react-bootstrap";
import axios from "axios";
import userContext from "../context/UserContext";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

function SignUp(props){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate =useNavigate();
  const{setUserData}=useContext(userContext);

  async function handleSubmit(e){
    console.log("inside");
    e.preventDefault();
    setLoading(true);
    try{
      const newUser = {username,email,password};

      await axios.post("/api/users/sign-up",newUser);
      const loginRes=await axios.post("/api/users/log-in",{
        username,
        email,
        password,
      });
      setUserData({
        token:loginRes.data.token,
        user:loginRes.data.user,
      });
      setLoading(false);
      navigate('/');
    }catch(err){
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return(
    <div className='create-page'>
      <div className='create-container'>
           <form className="signup-form" onSubmit={handleSubmit}>
           <h2>Sign Up</h2>
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={e=>setUsername(e.target.value)}
                  required
                />
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
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
                <input
                  type='password'
                  placeholder='Confirm Password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={e=>setConfirmPassword(e.target.value)}
                  required
                />
              <button disabled={loading} className='submit-button' type="submit">Sign Up</button>
              {error && <Alert variant="danger" id="Error">{error}</Alert>}

              <div className="signup">Already have an account? <b><Link to='/log-in'>Log in</Link></b> here.</div>
          </form>
          </div>
      </div>
  );
}
export default SignUp;