import { useAuth } from "./context/AuthContext";
import type { JSX } from "react";
import Login from "./pages/Login"
import Navigation from "./components/Navigation";
import UserProfile from "./components/UserProfile";
import './App.css';

function App(): JSX.Element {
    const { user } = useAuth();

    if (user) {
        return (
            <>
                <Navigation />
                <UserProfile />
            </>
        );
    }

    return (
        <>
            <Login />
        </>
    );
}

export default App;
