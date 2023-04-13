import ProjHeader from './ProjHeader.js';
import './CreateItem.css';

function CreateItem() {
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                    hello
                </div>
            </div>
        </div>
    );
  }
  
  export default CreateItem;
  