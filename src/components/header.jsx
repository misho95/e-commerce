import NavBar from "./navbar";
import GadgetsBar from './gadgetsBar'

function Header(){

    return(
        <div className="bg-neutral-800 text-gray-200 py-3 px-3 sm:px-10 flex justify-between">
            <NavBar />
            <GadgetsBar />
        </div>
    )
}

export default Header;