import './Shop.css';
import Item from './Item'
import { Link } from 'react-router-dom';


function Shop({item_list, isLoggedin}) {
    return (
        <div className="shop">
            {item_list.map(item => (
                <Item
                key = {item.id}
                title = {item.title}
                image = {item.image}
                description = {item.description}
                id = {item.id}
                isLoggedin = {isLoggedin}
                />
            ))}
            <div className='testt'>
                <Link to = '/create-item'> <div className="add-card">+</div> </Link>
            </div>
        </div>
    );
}

export default Shop;