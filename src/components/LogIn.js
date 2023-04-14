import ProjHeader from './ProjHeader.js';
import './LogIn.css';
import { Link } from 'react-router-dom';

function LogIn() {
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                <form action="/login_page.php" className='login-form'>
                    <h2>Log In</h2>
                    <input type="text" id="username" name="username" placeholder="Username"></input><p />
                    <input type="password" id="password" name="password" placeholder="Password"></input><p />
                    <input type="submit" value="Submit" className='submit-button'></input>
                    <div className="signup">Don't have an account? <b><Link to = '/sign-up'>Sign up</Link></b> here.</div>
                </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default LogIn;
  