import { useState, useEffect } from "react";
import NavLink from './navlink'
import { Link } from 'react-router-dom'

function NavBar(){

    const [ category, setCategory] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json));
    }, [])

    return(
        <>
            <div className="hidden sm:flex gap-2 justify-center items-center">
                <Link to={'/'} className="text-yellow-500 text-xl px-5">E-Commerce</Link>
                {
                    category.map( (cat, index) => {
                        return <NavLink key={index}  name={cat} />
                    })
                }
            </div>
            <div className="flex sm:hidden">
                <button>
                    <span className="material-symbols-outlined">
                    menu
                    </span>
                </button>
            </div>
        </>
    )
}

export default NavBar;