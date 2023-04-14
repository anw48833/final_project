import ProjHeader from './ProjHeader.js';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                <form action="/signup_page.php" className='signup-form'>
                    <h2>Sign Up</h2>
                    <input type="text" id="username" name="username" placeholder="Username"></input><p />
                    <input type="text" id="email" name="email" placeholder="Email"></input><p />
                    <input type="password" id="password" name="password" placeholder="Password"></input><p />
                    <input type="password" id="password" name="password" placeholder="Re-enter Password"></input><p />
                    <input type="submit" value="Submit" className='submit-button'></input>
                    <div className="signup">Already have an account? <b><Link to = '/log-in'>Log in</Link></b> here.</div>
                </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default SignUp;
  