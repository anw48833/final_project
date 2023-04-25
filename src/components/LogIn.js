import ProjHeader from './ProjHeader.js';
import './LogIn.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function LogIn() {
    const isLoggedin = true;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        // Validate the user's input
        if (username && password) {
            setIsValid(true);
            // Make a POST request to the backend to log in the user
            try {
                const response = await axios.post('/api/log-in', {
                    username,
                    password,
                });
                if (response.status === 200) {
                    // Redirect the user to the homepage
                    window.location = '/';
                } else {
                    console.log(response.data);
                }
            } catch (err) {
                console.log(err);
            }
        } else {
            setIsValid(false);
        }
    }

    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                    <form className='login-form' onSubmit={handleSubmit}>
                        <h2>Log In</h2>
                        <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}></input><p />
                        <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input><p />
                        <input type="submit" value="Submit" className='submit-button' disabled={!isValid}></input>
                        <div className="signup">Don't have an account? <b><Link to='/sign-up'>Sign up</Link></b> here.</div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
