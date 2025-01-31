/* eslint-disable react/prop-types */

import babelImage from "../assets/babelLogo.png"
// import RegisterForm from "./Forms/RegisterForm"
// import LoginForm from "./Forms/LoginFom";
import { useState } from "react";


export default function Header(props){

    const [isRegistrationFormOpen, setIsRegistrationForm] = useState(false);

    const openRegistrationForm = () => setIsRegistrationForm(true);
    const closeRegistrationForm = () => setIsRegistrationForm(false);


    return(
        <header>
            <div className="link-part">
                <a href="#register" className="register-link" onClick={openRegistrationForm}>{props.isArabic ? "تسجيل الدخول" : "Registration"}
                </a>
                {/* <RegisterForm isOpen={isRegistrationFormOpen} onClose={closeRegistrationForm} isArabic={props.isArabic} /> */}

                {/* <LoginForm isOpen={isRegistrationFormOpen} onClose={closeRegistrationForm} isArabic={props.isArabic} /> */}
                    
            </div>
            <div className="image-part">
                <img src={babelImage} alt="Logo" className="logo" />
                <span>{props.isArabic ? "الأخبار المحلية" : "Local News"}</span>
            </div>

        </header>

    )
}