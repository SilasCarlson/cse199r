import { createContext, useState, useEffect, useContext } from "react";
import { loginUser, logoutUser, getUser, ILoginProps } from "../api/Auth";
import type { JSX } from "react";
import type { User } from "../types/User";
import { Navigate } from 'react-router-dom';

export interface AuthContextType {
    userIsLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext  = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
    const context: AuthContextType | null = useContext(AuthContext);
    if (context === null) throw new Error("useAuth must be used within the AuthProvider");
    return context;
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
    const [ user, setUser ] = useState<User|null>(null);
    const [ userIsLoggedIn, setUserIsLoggedIn ] = useState<boolean>(false);

    const mountUser = (userData: User): void => {
        // Set the user
        setUser(userData);

        // Update the user is logged in
        setUserIsLoggedIn(true);

        // Update localStorage
        localStorage.setItem("userId", userData.id.toString());
    }

    const unmountUser = (): void => {
        // set the user
        setUser(null);

        // Update the user is logged in
        setUserIsLoggedIn(false);

        // Update localStorage
        localStorage.removeItem("userId");
    }

    // Get if the user is logged in according to localstorage
    if (Boolean(localStorage.getItem("userId")) && !userIsLoggedIn) {
        setUserIsLoggedIn(true);
    }

    // Mount user
    useEffect(() => {
        const getUserData: () => Promise<User|null> = async (): Promise<User|null> => {
            return await getUser();
        }

        getUserData().then((userData: User|null): void => {
            if (userData != null) {
                mountUser(userData);
            } else {
                unmountUser();
            }
        });
    }, []);

    const login = async (email: string, password: string): Promise<void> => {
        const isLoggedIn: boolean = await loginUser(email, password);

        if (isLoggedIn) {
            // Get user data
            const userData: User|null = await getUser();

            // Log the user in (if plausible)
            if (userData !== null) mountUser(userData);
        }
    }

    const logout = async () => {
        // Exit this function if the user is already logged out!
        if (!userIsLoggedIn) return;

        await logoutUser();
        unmountUser();
    }

    return (
        <AuthContext.Provider value={{ userIsLoggedIn, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}