import './App.css';
import './framework.css';
import { useAuth } from "./Context/AuthContext"
import Login from "./Pages/Login";
import UserProfile from "./Pages/UserProfile";

function App() {
    const { user } = useAuth();

    if (user) {
        return (
            <>
                <UserProfile />
            </>
        )
    }

    return (
        <>
            <Login />
        </>
    )
}

export default App;
