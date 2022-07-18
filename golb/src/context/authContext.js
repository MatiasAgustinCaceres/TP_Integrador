import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("There is no auth provider")
    return context;
}

export function AuthProvider({children}){

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
    },[]);

    const signup = (userData) =>{
        if (! (userData.email === userData.emailConfirm)) throw new Error("Las direcciones no coinciden");
        if (! (userData.password === userData.passwordConfirm)) throw new Error("Las Contraseñas no coinciden");

       return createUserWithEmailAndPassword(auth, userData.email, userData.password);
    };

    const login = (userData) => {
        return signInWithEmailAndPassword(auth, userData.email, userData.password);
    };

    const logout = () => signOut(auth)

    return(
        <authContext.Provider value={{signup, login, logout, user}}>
            {children}
        </authContext.Provider>
    );
}