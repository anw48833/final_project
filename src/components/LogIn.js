import ProjHeader from './ProjHeader.js';
import './LogIn.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function LogIn() {
    const isLoggedin = true;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();
      // Validate the user's input
      if (username && password) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                <form action="/login_page.php" className='login-form' onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input><p />
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input><p />
                    <input type="submit" value="Submit" className='submit-button' disabled={!isValid}></input>
                    <div className="signup">Don't have an account? <b><Link to = '/sign-up'>Sign up</Link></b> here.</div>
                </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default LogIn;
  