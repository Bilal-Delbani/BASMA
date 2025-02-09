/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    user: null,
    token: null,
    isArabic: false,
    error: null,
    setUser: () => {},
    setToken: () => {},
    setIsArabic: () => {},
    setError: ()=>{},
});

export const ContextProvider = ({children}) => {
    const [user, _setUser] = useState(JSON.parse(localStorage.getItem("user"))||null);
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [isArabic, setIsArabic] = useState(false);
    const [error, setError] = useState({email:'', password: '', recaptcha:''});


    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token)
        }
        else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    const setUser = (user) => {
        _setUser(user)
        if(user){
            localStorage.setItem('user', JSON.stringify(user))
        }
        else{
            localStorage.removeItem('user');
        }
    }

    const toggleLanguage = () => {
        setIsArabic(prev => !prev);  
    };


    return(
        <stateContext.Provider value={{
            user,
            token,
            isArabic,
            error,
            setUser,
            setToken,
            setIsArabic: toggleLanguage,
            setError,

        }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext);