import {useEffect, useState} from "react";
import { getUserData } from "../Data/User";
import { useAuth } from "../Context/AuthContext";

function UserProfile() {
    const [ userData, setUserData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    const { logout } = useAuth();

    useEffect(() => {
        getUserData()
            .then(setUserData)
            .catch((error) => {
                // Log out user
                if (error.message === "Unauthorized request" || error.message === "Unknown user") {
                    logout();
                }
            })
            .finally(() => setIsLoading(false));
    }, [ logout ]);

    if (isLoading) {
        return (
            <p>Loading user data!</p>
        );
    }

    return (
        <div className="jumbotron" data-theme="dark">
            <div className="content">
                <h1>{userData.username}</h1>
                <p>{userData.email}</p>
                <p>Joined on: {userData.created_at.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                <button data-color="red" onClick={logout}>Logout</button>
            </div>
        </div>
    );
}

export default UserProfile;