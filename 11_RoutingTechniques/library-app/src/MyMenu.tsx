import { NavLink } from "react-router-dom";
import "./MyMenu.css";

export default function MyMenu() {
    return (
		<nav>
			<NavLink to="/">Home</NavLink> &nbsp;|&nbsp;
			<NavLink to="/books">Books</NavLink> &nbsp;|&nbsp;
			<NavLink to="/films">Films</NavLink>
			<NavLink to="/moreStuff">More Stuff</NavLink>
		</nav>
    )
}