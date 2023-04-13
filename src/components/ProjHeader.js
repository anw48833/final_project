import './ProjHeader.css';


function ProjHeader({isLoggedin}) {
    if (!isLoggedin) {
        return (
            <div className="header">
                <img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" alt="Dawg Days Logo" />
                <h2 className="title">Dawg Days</h2>
                <ul className = "nav-links"> 
                    <li className = "navItem"> <a href="">Home</a></li>
                    <li className = "navItem"> <a href="">Items</a> </li>
                    <li className = "navItem"> <div className="button">Log In</div> </li>
                </ul>
                
            </div>
        );
    } else {
        return (
            <div className="header">
                <img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" alt="Dawg Days Logo" />
                <h2 className="title">Dawg Days</h2>
                <ul className = "nav-links"> 
                    <li className = "navItem"> <a href="">Home</a></li>
                    <li className = "navItem"> <a href="">Items</a> </li>
                    <li className = "navItem"> <div className="button">Log Out</div> </li>
                </ul>
            </div>
        );
    }
}

export default ProjHeader;