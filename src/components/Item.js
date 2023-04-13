import './Item.css';
import Card from './Card';


function Item(props) {
    return (
        <Card className="user-class">
            <img src={props.image} alt={props.title} className='user-class-img'/>
            <h2 className='user-class-name'>{props.title}</h2>
        </Card>
    );
}

export default Item;