import React, { useState, useEffect } from 'react';
import ProjHeader from './ProjHeader.js';
import './EditItem.css';
import axios from 'axios';
import { useParams } from 'react-router';
import { useLocation } from 'react-router-dom';

function EditItem(props) {
    const { id } = useParams();

    const location = useLocation();
    const [_id, set_id] = useState(location.state.item._id);
    const [title, setTitle] = useState(location.state.item.title);
    const [image, setImage] = useState(location.state.item.image);
    const [description, setDescription] = useState(location.state.item.description);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedItem = { _id, title, image, description };
        try {
          const res = await axios.put(`/api/items/${_id}`, updatedItem);
          console.log(res.data);
          window.location = '/';
        } catch (err) {
          console.log(err.response.data);
        }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
      };
    
      const handleImageChange = (e) => {
        setImage(e.target.value);
      };
    
      const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
      };

    return (
        <div>
            <div className='create-page'>
                <div className='create-container'>
                    <form onSubmit={handleSubmit} className='item-form'>
                        <h2>Edit an Item</h2>
                        <input type="text" name="title" placeholder="Item name" value={title} onChange={handleTitleChange} /><p />
                        <input type="text" name="image" placeholder="Item image (link)" value={image} onChange={handleImageChange} /><p />
                        <textarea name="description" placeholder="Item description" className='item-desc' value={description} onChange={handleDescriptionChange} /><p />
                        <input type="submit" value="Submit" className='submit-button' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditItem;
