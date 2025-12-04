import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

function Home(): JSX.Element {
    const { userIsLoggedIn } = useAuth();

    return (
        <BaseLayout>
            <header>
                <h1>CSE 199R</h1>
            </header>

            <main>
                <p>Hello, welcome to my Freshman Discovery Project</p>
                { userIsLoggedIn ? (
                    <div className="linkContainer">
                        <p><Link to="/logout" >Logout</Link></p>
                        <p><Link to="/study/1" >Study 1</Link></p>
                        <p><Link to="/study/2" >Study 2</Link></p>
                    </div>
                ) : (
                    <div className="linkContainer">
                        <p><Link to="/login" >Login</Link></p>
                        <p><Link to="/register" >Register</Link></p>
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

export default Home;