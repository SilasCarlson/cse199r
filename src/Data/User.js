import { Server } from "./Server";
import { useAuth } from "../Context/AuthContext";

export const getUserData = async () => {
    const apiResponse = await fetch(Server.apiUrl, {
        method: "POST",
        body: JSON.stringify({
            handler: "UserProfile",
            token: localStorage.getItem("authToken"),
            user_id: localStorage.getItem("userId")
        })
    });
    const apiResult = await apiResponse.json();

    if (!apiResult.success || !apiResponse.ok) throw new Error(apiResult.message);

    // Process data
    apiResult.data.created_at = new Date(apiResult.data.created_at);

    return apiResult.data;
}