import { useStateContext } from "../contexts/contextProvider.jsx";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";

import eng from "../assets/eng.png";
import ara from "../assets/ara.png";
import Header from "./Header.jsx"

export default function GuestLayout(){
    const {token, isArabic, setIsArabic, setError} = useStateContext();
    const navigate = useNavigate();
    
    useEffect(() => {
        setError({ email: '', password: '', recaptcha:''}); // Reset error state when the path changes
    }, [location.pathname]);

    if(token){
       return <Navigate to='/' />
    }


    return(
        <>
            <article className="Home-page"> 

                <div className="settings">
                    <label className="toggle-switch">
                        <input type="checkbox" onChange={() => setIsArabic()} />
                        <span className="slider">
                            <div className="settings-image-container">
                                <img src={`${isArabic ? ara : eng}`} alt="language-toggle" className="circle-image" />    
                            </div>
                        </span>
                    </label>
                </div>


                <Header/>

                <div className="guest-message-container">
                    <p className="guest-message">
                        {
                            isArabic?
                                ".إذا كان لديك حساب، اضغط على زر تسجيل الدخول. إذا لم يكن لديك حساب، استخدم رابط التسجيل أعلاه لإنشاء حساب جديد"
                            :

                            "If you already have an account, click the Login button to sign in. If not, use the Registration link above to create a new account."
                        }
                    </p>
                    <button onClick={() => navigate("/guest/login")} className="register-button">{isArabic ? "تسجيل الدخول" : "Login"}</button>
                </div>

            </article>
            
            <Outlet />
        </>

        
    )
}