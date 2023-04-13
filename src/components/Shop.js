import './Shop.css';
import Item from './Item'


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
            <a href=""><div className="add-card">+</div></a>
        </div>
    );
}

export default Shop;