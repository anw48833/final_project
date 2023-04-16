import ProjHeader from './ProjHeader.js';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function SignUp() {
  const isLoggedin = true;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const isSubmitDisabled = () => {
    return password !== confirmPassword;
  }

  return (
    <div>
      <ProjHeader isLoggedin={isLoggedin} />
      <div className='create-page'>
        <div className='create-container'>
          <form action="/signup_page.php" className='signup-form'>
            <h2>Sign Up</h2>
            <input type="text" id="username" name="username" placeholder="Username"></input><p />
            <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input><p />
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input><p />
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Re-enter Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input><p />
            <input type="submit" value="Submit" className='submit-button' disabled={isSubmitDisabled()}></input>
            <div className="signup">Already have an account? <b><Link to = '/log-in'>Log in</Link></b> here.</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
