import { useState, useEffect } from "react";
import Render from "../components/render";

function Cart(){

    const localCart = JSON.parse(localStorage.getItem('cart'));
    const [ data, setData] = useState( localCart ? localCart : [])

    const changeData = (id, val) => {
        const map = data.map( (item) => {
            if(item.id === id){return {
                ...item,
                quantity: val ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : item.quantity
            }
            }else {
                return item;
            }
        })
        setData(map);
    }

    const deleteFromCart = (id) => {
        const filter = data.filter( (item) => {
            if(item.id !== id) return item;
        })

        setData(filter);
    }

    useEffect( () => {
        localStorage.setItem('cart', JSON.stringify(data));
    }, [data])




    return(
        <div>
            <div className="w-full flex justify-center p-5">
                <div className="w-full sm:w-1/2 flex flex-col gap-3">
            {
                data.map( (cart) => {
                    return(
                            <div key={cart.id} className="w-full bg-gray-100 p-3 relative">
                                <button onClick={() => deleteFromCart(cart.id)} className="absolute right-1 top-1">
                                    <span className="material-symbols-outlined">
                                    delete
                                    </span>
                                </button>
                                <h1 className="p-2">{cart.title}</h1>
                                <div className="flex flex-col sm:flex-row p-1 gap-3">
                                    <img src={cart.image} className="w-40"/>
                                    <p>{cart.description}</p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-2">
                    <button onClick={() => changeData(cart.id, false)} className="bg-yellow-500 px-1 rounded-lg">-</button>
                    <span>{cart.quantity}</span>
                    <button onClick={() => changeData(cart.id, true)} className="bg-yellow-500 px-1 rounded-lg">+</button>
                </div>    
                                    <p>Price: {cart.price * cart.quantity} $</p>
                                </div>
                            </div>

                    )
                })
            }
            </div>
        </div>
        </div>
    )
}

export default Cart;