import { login, type User } from "@/sevices/auth"
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
    authToken?: string | null,
    currentUser?: User | null,
    handleLogin: () => Promise<void>,
    handleLogout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface AuthProviderProps{
    children: ReactNode
}

function AuthProvider({children}: AuthProviderProps) {
    const [authToken, setAuthToken]=useState<string | null>();
    const [currentUser, setCurrentUser]=useState<User | null>();

    async function handleLogin() {
        try {
            const response=await login();

            const {authToken, user}=response[1];

            setAuthToken(authToken);
            setCurrentUser(user);
        } catch (error) {
            setAuthToken(null);
            setCurrentUser(null);
        }
    }

    function handleLogout() {
        setAuthToken(null);
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{
            authToken,
            currentUser,
            handleLogin,
            handleLogout
        }}>{children}</AuthContext.Provider>
    );
}

export function useAuth() {
    const context=useContext(AuthContext);

    if(context === undefined) {
        throw new Error('useAuth must be used inside of a AuthProvider');
    }

    return context;
} 

export default AuthProvider;