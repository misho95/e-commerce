import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Render from "../components/render";

function Category(){

    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('name');

    const [ data, setData ] = useState([]);

    useEffect( () => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(json=>setData(json))
    }, [searchParams]);

    return(
        <Render data={data} />
    )
}

export default Category;