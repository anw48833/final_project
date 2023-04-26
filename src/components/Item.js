import './Item.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Item(props) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [deletedItem, setDeletedItem] = useState(null);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/items/${props.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsDeleted(true);
      setDeletedItem(props.id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (!isDeleted && props.isLoggedIn) {
    return (
      <Card className="item-class">
        <img src={props.image} alt={props.title} className='item-class-img'/>
        <h2 className='item-class-name'>{props.title}</h2>
        <p className='item-class-description'>{props.description}</p>
        <Link to={`/edit-item/${props.id}`} isLoggedIn={props.isLoggedIn} state={{ item: { _id: props.id, title: props.title, image: props.image, description: props.description } }}><div className="edit-button">Edit</div></Link>
        <div className="delete-button" onClick={handleDelete}>Delete</div>
      </Card>
    );
  } else if (deletedItem === props.id) {
    return null; // item has been deleted, render nothing
  } else {
    return (
        <Card className="item-class">
          <img src={props.image} alt={props.title} className='item-class-img'/>
          <h2 className='item-class-name'>{props.title}</h2>
          <p className='item-class-description'>{props.description}</p>
        </Card>
      );
  }
}

export default Item;