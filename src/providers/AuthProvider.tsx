import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
    userId: string | null;
    token: string | null;
    login: (token: string, id: string) => void;
    logout: () => void;
}

interface AuthProvidersProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: AuthProvidersProps) {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [userId, setUserId] = useState<string | null>(localStorage.getItem("userId"));

    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const storedUserId = localStorage.getItem("userId");
        if (storedToken) setToken(storedToken);
        if (storedUserId) setUserId(storedUserId);
    }, []);

    const login = (newToken: string, newUserId: string) => {
        setToken(newToken);
        setUserId(newUserId);

        localStorage.setItem("token", newToken);
        localStorage.setItem("userId", newUserId);
    };

    const logout = () => {
        setToken(null);
        setUserId(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    };

    return <AuthContext.Provider value={{ token, userId, login, logout }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
