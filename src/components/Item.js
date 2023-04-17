import './Item.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function Item(props) {
    if (props.isLoggedin == false) {
        return (
            <Card className="item-class">
                <img src={props.image} alt={props.title} className='item-class-img'/>
                <h2 className='item-class-name'>{props.title}</h2>
                <p className='item-class-description'>{props.description}</p>
            </Card>
        );
    } else {
        return (
            <Card className="item-class">
                <img src={props.image} alt={props.title} className='item-class-img'/>
                <h2 className='item-class-name'>{props.title}</h2>
                <p className='item-class-description'>{props.description}</p>
                    <Link to = {`/edit-item/${props.id}`}><div className="edit-button">Edit</div></Link>
                <div className="delete-button">Delete</div>
            </Card>
        );
    }
}

export default Item;