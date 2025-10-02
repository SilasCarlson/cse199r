import './App.css';
import { useState, useEffect } from "react";

function UserProfile({ userData }) {
    return (
        <div className="userProfile">
            <h1>{userData.last_name}, {userData.first_name}</h1>
        </div>
    );
}

function UserProfileContainer() {
    const [ data, setData ] = useState(<p>Loading...</p>);
    const apiUrl = "/server/server.php";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                const result = await response.json();

                setData(
                    <div className="userProfileContainer">
                        {result.users.map((user) => (
                            <UserProfile userData={user} key={user.customer_id} />
                        ))}
                    </div>
                );
            } catch (error) {
                return <p>Error! {error}</p>;
            }
        };

        fetchData();
    }, [ apiUrl ]);

    return data;
}

function App() {
    return (
        <>
            <h1>Hello There!</h1>
            <UserProfileContainer />
        </>
    )
}

export default App;
