import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav ({onSearch}){
    return(
        <>
            <NavLink to="/about"><button>About</button></NavLink>
            <NavLink to="/home"><button>Home</button></NavLink>
            <SearchBar onSearch={onSearch} />
        </>
    )
}