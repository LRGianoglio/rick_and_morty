import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";

export default function Nav ({onSearch}){
    return(
        <div>
            <NavLink to="/home"><button>Home</button></NavLink>
            <NavLink to="/favorites"><button>Favorites</button></NavLink>
            <NavLink to="/about"><button>About</button></NavLink>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}