import type { JSX } from "react";
import type { NavigateFunction } from "react-router-dom";
import { useEffect } from "react";
import { logoutUser } from "../api/Auth";
import { useNavigate } from "react-router-dom";

function Logout(): JSX.Element {
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        logoutUser().then(() => {
            //navigate("/");
        });
    }, [])

    return (
        <p>Please Wait...</p>
    )
}

export default Logout;