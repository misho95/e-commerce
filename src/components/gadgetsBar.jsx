import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '../context'

function GadgetsBar(){

    const cartNum = useContext(Context);

        const navigate = useNavigate();
        const searchBar = useRef();
        const [ search, setSearch] = useState('');

        const showSearchBar = () => {
            searchBar.current.classList.toggle('hidden');

        }
    
        const submitSearch = (e) => {
            e.preventDefault();
            searchBar.current.classList.add('hidden');
            setSearch('');
            navigate(`/search?val=${search}`)
        }


    return(
        <div className="flex gap-1">
            <div className='relative w-40 p-0'>
                <form onSubmit={submitSearch}>
                    <input ref={searchBar} type='text' value={search} onChange={(e) => { setSearch(e.target.value)}} className='absolute w-full hidden rounded-lg text-gray-800 pl-2'/>
                </form>
                <button onClick={showSearchBar} className='absolute right-1 top-1/2 -translate-y-1/2'>
                    <span className="material-symbols-outlined">
                    search
                    </span>
                </button>
            </div>
            <Link to='/cart'>
                <button className='relative w-8 h-8'>
                    <span className="material-symbols-outlined absolute top-0 left-0">
                    shopping_bag
                    </span>
                    {
                    cartNum.cart > 0 &&
                    <span className='absolute bg-white flex text-sm text-gray-800 px-1 rounded-full left-3 top-3'>{cartNum.cart}</span>
                    }
                </button>
            </Link>
        </div>
    )

    }
export default GadgetsBar;