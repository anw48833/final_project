import './Shop.css';
import Item from './Item'
import { Link } from 'react-router-dom';


function Shop({item_list, isLoggedin}) {
    return (
        <section className="shop" id="items">
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
                <div className="add-card"> <Link to = '/create-item'> + </Link> </div> 
        </section>
    );
}

export default Shop;