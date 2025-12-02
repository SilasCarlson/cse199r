import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import {Link} from "react-router-dom";

import "../styles/Navigation.css";

function Navigation(): JSX.Element {
    const { userIsLoggedIn } = useAuth();

    return (
        <nav>
            <ul>
                <li id="brand">CSE199R</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sets">Sets</Link></li>
            </ul>
            <ul id="right">
                {userIsLoggedIn ? (
                    <li><Link to="/logout">Logout</Link></li>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;