import type { JSX, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
    const { user } = useAuth();

    if (user !== null) {
        return children;
    }

    return (<Navigate to="/login" replace />);
}

export default RequireAuth;