import { createContext , useContext } from "react";
import { jwtDecode } from "jwt-decode";


export const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);   
    

    const user = jwtDecode(context?.token);


    if(!context){
        throw new Error(
            "useAuth doit être utilisé à l'intérieur d'un AuthProvider"
        );
    }

    return user;
}