import './Item.css';
import Card from './Card';


function Item(props, isLoggedin) {
    if (!{isLoggedin}) {
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
                <div className="edit-button">Edit</div>
                <div className="delete-button">Delete</div>
            </Card>
        );
    }
}

export default Item;