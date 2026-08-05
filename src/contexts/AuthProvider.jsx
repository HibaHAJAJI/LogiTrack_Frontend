import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) =>{

    const [ token, setToken ] = useState(
        localStorage.getItem("token")
    );

    const [user , setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = (userData, jwtToken) =>{
        setUser(userData);
        setToken (jwtToken);

        localStorage.setItem("token", jwtToken);
        localStorage.setItem("user",JSON.stringify(userData))
    };

    return(
        <AuthContext.Provider 
        value={{
            user,
            token,
            login
        }}
        >
            {children}

        </AuthContext.Provider>
    );
};