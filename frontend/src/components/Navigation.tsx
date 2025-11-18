import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import {Link} from "react-router-dom";

function Navigation(): JSX.Element {
    const { userIsLoggedIn } = useAuth();

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sets">Sets</Link></li>

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