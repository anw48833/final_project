import ProjHeader from './ProjHeader.js';
import './EditItem.css';

function EditItem() {
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                <form action="/action_page.php" className='item-form'>
                    <h2>Edit an Item</h2>
                    <input type="text" id="item-name" name="item-name" placeholder="Item name"></input><p />
                    <input type="text" id="item-img" name="item-img" placeholder="Item image (link)"></input><p />
                    <textarea type="text" id="item-desc" name="item-desc" placeholder="Item description" className='item-desc'></textarea><p />
                    <input type="submit" value="Submit" className='submit-button'></input>
                </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default EditItem;
  