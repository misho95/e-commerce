import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'

function ItemCard( {id, category, des, img, price, rating, title}){


    return(
    <Link to={`/item?id=${id}`}>
        <div className="w-80 flex flex-col justify-center items-center bg-gray-100 p-5">
            <img src={img} className="w-40 h-40"/>
            <h1>{title}</h1>
            <p>{price}$</p>
            <div>
            <Rating name="read-only" value={rating.rate} readOnly />
            </div>
        </div>
    </Link>
    )
}

export default ItemCard;