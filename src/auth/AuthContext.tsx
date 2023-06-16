import { createContext } from "react";

interface Context {
    logged: boolean,
    user: {
        name: string,
        email: string,
        token: string
    } | null,
    login: (name?: string, email?: string, password?: string) => void,
    logout: () => void
}

export const AuthContext = createContext<Context>(null!);