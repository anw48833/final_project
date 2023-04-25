import './Item.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Item(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/items/${props.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsDeleted(true);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (!isDeleted && props.isLoggedin) {
    return (
      <Card className="item-class">
        <img src={props.image} alt={props.title} className='item-class-img'/>
        <h2 className='item-class-name'>{props.title}</h2>
        <p className='item-class-description'>{props.description}</p>
        <Link to={`/edit-item/${props.id}`} state={{ item: { _id: props.id, title: props.title, image: props.image, description: props.description } }}><div className="edit-button">Edit</div></Link>
        <div className="delete-button" onClick={handleDelete}>Delete</div>
      </Card>
    );
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
