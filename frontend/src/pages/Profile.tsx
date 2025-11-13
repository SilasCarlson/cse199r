import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

function Profile(): JSX.Element {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return (
        <BaseLayout>
            <h1>{ user.name }</h1>
        </BaseLayout>
    );
}

export default Profile;