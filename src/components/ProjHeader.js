import './ProjHeader.css';
import { Link } from 'react-router-dom';


function ProjHeader({isLoggedin}) {
    if (!isLoggedin) {
        return (
            <div className="header">
                <a href ='/#home'><img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" alt="Dawg Days Logo" /></a>
                <h2 className="title"><Link to ='/'>Dawg Days</Link></h2>
                <ul className = "nav-links"> 
                    <li className = "navItem"> <a href ='/#home'>Home</a> </li>
                    <li className = "navItem"> <a href ='/#items'>Items</a> </li>
                    <li className = "navItem"> <Link to ='/log-in'> <div className="button">Log In</div> </Link> </li>
                </ul>
                
            </div>
        );
    } else {
        return (
            <div className="header">
                <a href ='/#home'><img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" alt="Dawg Days Logo" /></a>
                <h2 className="title"><Link to ='/'>Dawg Days</Link></h2>
                <ul className = "nav-links"> 
                    <li className = "navItem"> <a href ='/#home'>Home</a> </li>
                    <li className = "navItem"> <a href ='/#items'>Items</a> </li>
                    <li className = "navItem"> <Link to ='/#home'> <div className="button">Log Out</div> </Link> </li>
                </ul>
            </div>
        );
    }
}

export default ProjHeader;