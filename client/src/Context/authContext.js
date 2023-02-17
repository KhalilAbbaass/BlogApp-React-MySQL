import { createContext, useEffect, useState } from "react";
import { loginUser } from "../services/Login";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    const login = async (inputs) => {
        loginUser(inputs).then((result) => {
            setCurrentUser(result.data)
        })

    }
    const logout = async (inputs) => {
        //axios logout
        setCurrentUser(null);
    }

    useEffect(() => {
        localStorage.setItem('user' , JSON.stringify(currentUser));
    }, [currentUser]);
    return (
        <AuthContext.Provider value={{currentUser, login , logout}}>
            {children}
        </AuthContext.Provider>
    )
}