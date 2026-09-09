import { NavLink } from "react-router-dom"
import './Header.css'

export default function Header(){
    return(
        <nav>
            <NavLink to="/dom">Using Dom</NavLink>
            <NavLink to="/uncontrolled">Using an uncontrolled component</NavLink>
            <NavLink to="/controlled">Using a controlled component</NavLink>
        </nav>
    )
}