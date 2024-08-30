import { createContext, useState, useContext } from "react";
import { registeeResquest } from "../api/user.js";

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState(null)

    const signup = async (user) => {
        try {
            const res = await registeeResquest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true); 
        } catch (error) {
         setErrors(error.response.data)   
        }
    }

    return (
        <AuthContext.Provider value={{
            signup,
            user,
            isAuthenticated,
            errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}