import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Item(){

    const [searchParams, setSearchParams] = useSearchParams();
    const [ data, setData] = useState([]);
    const itemID = searchParams.get('id');
    const Cart = JSON.parse(localStorage.getItem('cart'));
    const [ localCart, setLocalCart ] = useState(Cart ? Cart : [])
    const [ quantity, setQuantity] = useState(1);

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/${itemID}`)
            .then(res=>res.json())
            .then(json=>setData(json));
    }, [])

    const addToCart = () => {
        
       const alreadyInCart = localCart.find( (cartItem) => {
            if(cartItem.id === data.id) return cartItem;
        })

        if(alreadyInCart){
            const map = localCart.map( (cartItem) => {
                if(cartItem.id === alreadyInCart.id){
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity+quantity
                    }
                } else {
                    return cartItem;
                }
              })

          setLocalCart(map);
        } else {
            setLocalCart([...localCart, {
                id: data.id,
                title: data.title,
                description: data.description,
                image: data.image,
                price: data.price,
                rating: data.rating,
                quantity: quantity
            }])
        }
    }

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(localCart));
    }, [localCart])


    return(
        <div className="w-full flex justify-center items-center">
            <div className="w-full sm:w-1/4 p-3 bg-gray-100 m-5 flex flex-col items-center">
            <h1 className="text-lg text-center p-2">{data.title}</h1>
            <img src={data.image} className="w-1/2"/>
            <p className="p-2">{data.description}</p>
            <div className="w-full flex justify-between items-center">
                <h3>{data.price}$</h3>
                <div className="flex items-center gap-2">
                    <button onClick={ () => {
                        if(quantity > 1){
                            setQuantity(quantity-1);
                        }
                    }} className="bg-yellow-500 px-1 rounded-lg">-</button>
                    <span>{quantity}</span>
                    <button onClick={ () => {
                        setQuantity(quantity+1);
                    }} className="bg-yellow-500 px-1 rounded-lg">+</button>
                </div>
                <button onClick={addToCart} className="bg-yellow-500 p-2 rounded-lg">Add To Cart</button>
            </div>
            </div>
        </div>
    )
}

export default Item;