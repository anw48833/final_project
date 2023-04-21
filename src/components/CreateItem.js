import './CreateItem.css';
import React, { useState } from 'react';
import axios from 'axios';
import ProjHeader from './ProjHeader.js';

function CreateItem() {
    const isLoggedin = true;
    const [item, setItem] = useState({ title: '', description: '', image: '' });

    const handleSubmit = async (e) => {
        console.log("test");
        e.preventDefault();
        try {
            const res = await axios.post('/api/items', item);
            console.log(res.data);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    const handleChange = (e) => {
        console.log("test2");
        const { name, value } = e.target;
        setItem({ ...item, [name]: value });
    };

    return (
        <div>
            <ProjHeader isLoggedin={isLoggedin} />
            <div className='create-page'>
                <div className='create-container'>
                    <form target="_blank" onSubmit={handleSubmit} className='item-form'>
                        <h2>Create an Itemdasa</h2>
                        <input type="text" name="title" placeholder="Item name" value={item.title} onChange={handleChange} /><p />
                        <input type="text" name="image" placeholder="Item image (link)" value={item.image} onChange={handleChange} /><p />
                        <textarea name="description" placeholder="Item description" className='item-desc' value={item.description} onChange={handleChange} /><p />
                        <input type="submit" value="Submit" className='submit-button' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateItem;