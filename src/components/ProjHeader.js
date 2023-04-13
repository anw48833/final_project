import './ProjHeader.css';


function ProjHeader({isLoggedin}) {
    if (!isLoggedin) {
        return (
            <div className="header">
                <img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" />
                <h2 className="title">Dawg Days</h2>
                <div className="button">Log in</div>
            </div>
        );
    } else {
        return (
            <div className="header">
                <img src="https://i.ibb.co/rpMg60m/dawg-days-logo-2.png" className="logo" />
                <h2 className="title">Dawg Days</h2>
                <div className="button">Log out</div>
            </div>
        );
    }
}

export default ProjHeader;