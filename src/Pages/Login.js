import { useActionState } from "react";
import { useAuth } from "../Context/AuthContext";

function Login() {
    const { login } = useAuth();

    async function submit(previousState, formData) {
        try {
            const response = await fetch("http://localhost/freshman-project/server/post/user/login", {
                method: "POST",
                body: JSON.stringify({
                    username: formData.get("username"),
                    password: formData.get("password")
                })
            });
            const result = await response.json();

            if (!result.success) return new Error(result.message).toString();

            // Log the user in!
            login(result.token, result["user_id"]);
        } catch (error) {
            return error.toString();
        }
    }

    const [ errorMessage, loginAction ] = useActionState(submit, null);

    return (
        <div className="contentContainer centerText" data-theme="dark" data-fixed="true" data-position="centerOfScreen">
            <div className="content">
                <h2>Login Form</h2>
                <form action={loginAction} autoComplete="off">
                    {!!errorMessage && <div className="output">{errorMessage}</div>}
                    <input name="username" type="text" placeholder="Username" /><br /><br />
                    <input name="password" type="password" placeholder="Password" /><br /><br />
                    <button type="submit" data-color="blue">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;