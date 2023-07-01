import { Link } from 'react-router-dom';

function NavLink({name}){

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <Link to={`/category?name=${name}`} className='text-gray-200'>{capitalizeFirstLetter(name)}</Link>
    )
}

export default NavLink;