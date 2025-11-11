import {JSX, useState } from "react";
import { useAuth } from "../context/AuthContext";
import type { AxiosError } from "axios";

function Login(): JSX.Element {
    const [ error, setError ] = useState<string | null>(null);
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const { login } = useAuth();

    const handleSubmit = async (formData: FormData) => {
        const email: string = formData.get("email") as string;
        const password: string = formData.get("password") as string;

        try {
            setIsLoading(true);
            await login(email, password);
        } catch (error: any | AxiosError) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form action={handleSubmit}>
            <h2>Login</h2>
            {error && (<p>{ error }</p>)}
            {isLoading && (<p>Logging in...</p>)}
            <label>Email: <input type="email" placeholder="Email" name="email" /></label>
            <label>Password: <input type="password" placeholder="Password" name="password" /></label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;