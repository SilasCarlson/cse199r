import {useEffect, useState} from "react";

function UserProfile() {
    const [ userData, setData ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetch("http://localhost/freshman-project/server/restapi.php", {
                    method: "POST",
                    body: JSON.stringify({
                        handler: "GetUser",
                        user_id: localStorage.user_id
                    })
                });
                const result = await response.json();
                result.data.created_at = new Date(result.data.created_at);
                console.log(result.data);
                setData(result.data);
            } catch (error) {
                console.log(error.toString());
            } finally {
                setIsLoading(false);
            }
        }

        getUserData();
    }, []);

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
            </div>
        </div>
    );
}

export default UserProfile;