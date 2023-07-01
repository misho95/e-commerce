import Render from "../components/render";
import { useState, useEffect } from "react";

function HomePage(){

    const [ data, setData ] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=> setData(json))
    }, []);


    return(
            <Render data={data}/>
    )
}

export default HomePage;