import ProjHeader from './ProjHeader.js';

function LogIn() {
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
        </div>
    );
  }
  
  export default LogIn;