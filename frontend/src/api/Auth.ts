import AxiosAPI from "./AxiosAPI";
import type { User } from "../types/User";
import type { AxiosError, AxiosResponse } from "axios";

export interface ILoginProps {
    email: string;
    password: string;
}

export async function loginUser(email: string, password: string): Promise<boolean> {
    // Get CSRF token
    await AxiosAPI.get("/sanctum/csrf-cookie");

    // Attempt login
    const response = await AxiosAPI.post("/login", { email, password });

    // Return status
    return response.status === 204;
}

export async function logoutUser(): Promise<void> {
    // Log the user out
    await AxiosAPI.post("/logout").catch((err: AxiosError) => {
        // do nothing
    });
}

export async function getUser(): Promise<User|null> {
    try {
        const response = await AxiosAPI.get("/api/user");
        return response.data;
    } catch (error: AxiosError|any) {
        return null;
    }
}