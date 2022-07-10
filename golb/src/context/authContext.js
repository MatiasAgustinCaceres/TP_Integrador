import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no auth provider")
    return context;
}

export function AuthProvider({children}){

    const signup = (userData) =>{
        if (! (userData.email === userData.emailConfirm)) throw new Error("Las direcciones no coinciden");
        
        if (! (userData.password === userData.passwordConfirm)) throw new Error("Las Contraseñas no coinciden");
       return createUserWithEmailAndPassword(auth, userData.email, userData.password);
    };

    return(
        <authContext.Provider value={{signup}}>
            {children}
        </authContext.Provider>
    );
}