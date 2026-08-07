import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) =>{

    const [ token, setToken ] = useState(
        localStorage.getItem("token")
    );

 

    const login = (userData, jwtToken) =>{
        setToken (jwtToken);

        localStorage.setItem("token", jwtToken);
    };

    const logout = ()=>{

        setToken(null);

        localStorage.removeItem("token");

        window.location.href = "/login";
    }

    return(
        <AuthContext.Provider 
        
        value={{
            
            token,
            login,
            logout
        }}
        >
            {children}

        </AuthContext.Provider>
    );
};