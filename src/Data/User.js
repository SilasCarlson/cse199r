import { Server } from "./Server";

export const getUserData = async () => {
    const url = `${Server.apiUrl}get/user/profile/${localStorage.getItem("userId")}`;
    const apiResponse = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            token: localStorage.getItem("authToken")
        })
    });
    const apiResult = await apiResponse.json();

    if (!apiResult.success || !apiResponse.ok) throw new Error(apiResult.message);

    // Process data
    apiResult.data.created_at = new Date(apiResult.data.created_at);

    return apiResult.data;
}