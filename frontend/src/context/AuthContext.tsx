import {createContext, useState, useEffect, useContext} from "react";
import { loginUser, logoutUser, getUser } from "../api/Auth";
import type { JSX } from "react";
import type { User } from "../types/User";

export interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
    const context: AuthContextType | null = useContext(AuthContext);
    if (context === null) throw new Error("useAuth must be used within the AuthProvider");
    return context;
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
    const [ user, setUser ] = useState<User|null>(null);

    // Mount user
    useEffect(() => {
        const getUserData: () => Promise<User|null> = async (): Promise<User|null> => {
            return await getUser();
        }

        getUserData().then((user: User|null): void => setUser(user));
    }, []);

    const login = async (email: string, password: string) => {
        await loginUser(email, password);
        const userData = await getUser();
        setUser(userData);
    }

    const logout = async () => {
        await logoutUser();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}