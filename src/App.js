import './App.css';
import Login from "./Forms/Login";
import UserProfile from "./Components/UserProfile";

function App() {

    if (!localStorage.getItem("authToken")) {
        return (
            <>
                <Login />
            </>
        )
    }

    return (
        <>
            <UserProfile />
        </>
    )
}

export default App;
