import ProjHeader from './ProjHeader.js';

function EditItem() {
    const isLoggedin = true;
    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
        </div>
    );
  }
  
  export default EditItem;
  