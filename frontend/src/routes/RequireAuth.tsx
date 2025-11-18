import type { JSX, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
    const { userIsLoggedIn } = useAuth();

    if (userIsLoggedIn) {
        return children;
    }

    return (<Navigate to="/login" replace />);
}

export default RequireAuth;