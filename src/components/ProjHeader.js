import './ProjHeader.css';
import { Link } from 'react-router-dom';


function ProjHeader({isLoggedin}) {
    if (!isLoggedin) {
        return (
            <div className="header">
                <Link to ='/'><img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" alt="Dawg Days Logo" /></Link>
                <h2 className="title"><Link to ='/'>Dawg Days</Link></h2>
                <ul className = "nav-links"> 
                    <li className = "navItem"> <Link to ='/'>Home</Link> </li>
                    <li className = "navItem"> <Link to ='/'>Items</Link> </li>
                    <li className = "navItem"> <Link to ='/log-in'> <div className="button">Log In</div> </Link> </li>
                </ul>
                
            </div>
        );
    } else {
        return (
            <div className="header">
                <Link to ='/'><img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" alt="Dawg Days Logo" /></Link>
                <h2 className="title"><Link to ='/'>Dawg Days</Link></h2>
                <ul className = "nav-links"> 
                    <li className = "navItem"> <Link to ='/'>Home</Link> </li>
                    <li className = "navItem"> <Link to ='/'>Items</Link> </li>
                    <li className = "navItem"> <Link to ='/'> <div className="button">Log Out</div> </Link> </li>
                </ul>
            </div>
        );
    }
}

export default ProjHeader;