import {JSX, useState } from "react";
import { useAuth } from "../context/AuthContext";
import type { AxiosError } from "axios";
import "../styles/App.css";
import BaseLayout from "../layouts/BaseLayout";

function Login(): JSX.Element {
    const { login } = useAuth();

    const handleSubmit = async (formData: FormData) => {
        const email: string = formData.get("email") as string;
        const password: string = formData.get("password") as string;
        await login(email, password);
    }

    return (
        <BaseLayout>
            <form action={handleSubmit}>
                <h2>Login</h2>
                <label>Email: <input type="email" placeholder="Email" name="email" /></label>
                <label>Password: <input type="password" placeholder="Password" name="password" /></label>
                <button type="submit">Submit</button>
            </form>
        </BaseLayout>
    );
}

export default Login;