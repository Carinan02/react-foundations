import { NavLink } from "react-router-dom";
import "./MyMenu.css";

export default function MyMenu() {
    return (
		<nav>
			<NavLink to="/">Home</NavLink> &nbsp;|&nbsp;
			<NavLink to="/products">Products</NavLink> &nbsp;|&nbsp;
			<NavLink to="/products-with-nested-routes">Products with nested routes</NavLink>
			<NavLink to="/ts-and-cs">Terms and Conditions</NavLink>
		</nav>
    )
}