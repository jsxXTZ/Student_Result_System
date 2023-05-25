import { createContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({child}) {
    return (
        <AuthContext.Provider>
            {child}
        </AuthContext.Provider>

    )
}