import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Airbus" >Airbus</NavLink>
            <NavLink to="/Boeing" >Boeing</NavLink>
        </nav>
    );
}


export default Navbar;