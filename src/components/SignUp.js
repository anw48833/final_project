import ProjHeader from './ProjHeader.js';

function SignUp() {
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
        </div>
    );
  }
  
  export default SignUp;
  