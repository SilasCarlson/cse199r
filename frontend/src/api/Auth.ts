import AxiosAPI from "./AxiosAPI";
import type { User } from "../types/User";
import type { AxiosError } from "axios";

export async function loginUser(email: string, password: string): Promise<void> {
    // Get CSRF token
    await AxiosAPI.get("/sanctum/csrf-cookie");

    // Attempt login
    await AxiosAPI.post("/login", { email, password });
}

export async function logoutUser(): Promise<void> {
    // Log the user out
    await AxiosAPI.post("/logout");
}

export async function getUser(): Promise<User|null> {
    try {
        const response = await AxiosAPI.get("/api/user");
        return response.data;
    } catch (error: AxiosError|any) {
        return null;
    }
}