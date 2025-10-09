import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    // Set up the states that are going to be used
    const [ user, setUser ] = useState(null);

    // Load user
    useEffect(() => {
        const savedUser = {
            authToken: localStorage.getItem("authToken"),
            id: localStorage.getItem("userId")
        }

        if (localStorage.getItem("authToken") && localStorage.getItem("userId")) {
            setUser(savedUser);
        }
    }, []);

    const login = (authToken, userId) => {
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("userId", userId);
        setUser({
            authToken: authToken,
            id: userId
        });
    };

    const logout = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}