import "../App.css";
import "../framework.css";

import { useActionState } from "react";

function Login() {
    async function submit(previousState, formData) {
        const postData = {
            handler: "Login",
            username: formData.get("username"),
            password: formData.get("password")
        }

        try {
            const response = await fetch("http://localhost/freshman-project/server/restapi.php", {
                method: "POST",
                body: JSON.stringify(postData)
            });
            const result = await response.json();

            if (!result.success) return new Error(result.message).toString();

            // Log the user in!
            localStorage.setItem("authToken", result.token);
            localStorage.setItem("user_id", result.user_id);
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