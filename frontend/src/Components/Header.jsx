/* eslint-disable react/prop-types */

import babelImage from "../assets/babelLogo.png"
// import RegisterForm from "./Forms/RegisterForm"
// import LoginForm from "./Forms/LoginFom";
import { useState } from "react";
import { useStateContext } from "../contexts/contextProvider.jsx";
import { Link } from "react-router-dom";

export default function Header(){
    const {user, token, isArabic} = useStateContext();
    let name = "Guest:";
    if(token){
        name = "Welcome " + user.name;
    }
    function headerLink(){
        if(token){
            return(
                <Link to="/guest" className="logout-link">
                    {isArabic ? "تسجيل الخروج" : "Logout"}
                </Link>
            )
        }
        else{
            return(
                <Link to="/guest/register" className="register-link">
                    {isArabic ? "تسجيل الدخول" : "Registration"}
                </Link>
            )
        }
    }

    return(
        <header>
            <div className="link-part">
                <span>{name}</span>
                {headerLink()}
   
            </div>
            <div className="image-part">
                <img src={babelImage} alt="Logo" className="logo" />
                <span>{isArabic ? "الأخبار المحلية" : "Local News"}</span>
            </div>

        </header>

    )
}