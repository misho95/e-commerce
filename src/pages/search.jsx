import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Render from "../components/render";

function Search(){

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('val');
    const [ data, setData ] = useState([]);
    const [ filter, setFilter] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=> setData(json))
    }, []);

    useEffect( () => {
        const filter = data.filter( (item) => {
            if(item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())) return item;
        })
        setFilter(filter);
    }, [data, searchParams])


    return(
        <Render data={filter} />
    )
}

export default Search;