import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";

function UserProfile(): JSX.Element {
    const { user } = useAuth();

    if (!user) {
        return (<p>Unknown user.</p>);
    }

    return (
        <div className="userProfile">
            <h1>{ user.name }</h1>
            <p>Email: { user.email }</p>
        </div>
    );
}

export default UserProfile;