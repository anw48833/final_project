import ProjHeader from './ProjHeader.js';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const isLoggedin = true;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState({ username: '', email: '', password: '', confirmPassword: '' });


  const isSubmitDisabled = () => {
    return !password || !confirmPassword || !username || !email;
  }

  const handleSubmit = async (e) => {
    console.log("went thru");
    e.preventDefault();
    setErrorMessage('');
    try {
      const response = await axios.post('/api/sign-up', { username, email, password });
      if (response.status === 200) {
        // Redirect user to login page after successful registration
        window.location.href = '/log-in';
      }
    } catch (error) {
      if (error.response) {
        console.error(error);
        setErrorMessage('An error occurred. Please try again later.');
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage(error.message);
      }
    }
  }

  return (
    <div>
      <ProjHeader isLoggedin={isLoggedin} />
      <div className='create-page'>
        <div className='create-container'>
          <form className='signup-form' onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input><p />
            <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input><p />
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input><p />
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input><p />
            <input type="submit" value="Submit" className='submit-button'></input>
            
            <div className="signup">Already have an account? <b><Link to = '/log-in'>Log in</Link></b> here.</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
