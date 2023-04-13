import './Shop.css';
import Item from './Item'


function Shop({item_list}) {
    return (
        <div className="test">
            {item_list.map(item => (
                <Item
                key = {item.id}
                title = {item.title}
                image = {item.image}
                description = {item.description}
                id = {item.id}
                />
            ))}
        </div>
    );
}

export default Shop;