import ProjHeader from './ProjHeader.js';
import './EditItem.css';
import { useParams } from 'react-router'

function EditItem() {
    const {id} = useParams();
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                <form action="/edit_item_page.php" className='item-form'>
                    <h2>Edit an Item</h2>
                    <input type="text" id="item-title" name="item-title" placeholder="Item name" value={id}></input><p />
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
  