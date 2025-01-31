import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    user: null,
    token: null,
    isArabic: false,
    setUser: () => {},
    setToken: () => {},
    setIsArabic: () => {},
});

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name : "John",
    });
    const [token, _setToken] = useState(123);
    const [isArabic, setIsArabic] = useState(false);


    const setToken = (token) => {
        _setToken(token)
        if(token){
            localStorage.setItem('ACCESS_TOKEN, token')
        }
        else{
            localStorage.removeItem('ACCESS_TOKEN');
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
            setUser,
            setToken,
            setIsArabic: toggleLanguage,

        }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext);