import './Shop.css';
import Item from './Item'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Shop({item_list, isLoggedIn}) {
    if (isLoggedIn) {
        return (
            <section className="shop" id="items">
                {item_list.map(item => (
                    <Item
                    key = {item._id}
                    title = {item.title}
                    image = {item.image}
                    description = {item.description}
                    id = {item._id}
                    isLoggedIn = {isLoggedIn}
                    />
                ))}
                    <div className="add-card"> <Link to = '/create-item'> + </Link> </div> 
            </section>
        );
    } else {
        return (
            <section className="shop" id="items">
                {item_list.map(item => (
                    <Item
                    key = {item._id}
                    title = {item.title}
                    image = {item.image}
                    description = {item.description}
                    id = {item._id}
                    isLoggedIn = {isLoggedIn}
                    />
                ))}
            </section>
        );
    }
}

export default Shop;