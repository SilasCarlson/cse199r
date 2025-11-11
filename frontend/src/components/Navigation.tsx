import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";

function Navigation(): JSX.Element {
    const { user, logout } = useAuth();

    return (
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Sets</a></li>

                {user ? (
                    <li><a href="" onClick={ logout }>Logout</a></li>
                ) : (
                    <li><a href="">Login</a></li>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;