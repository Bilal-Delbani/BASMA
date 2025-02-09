/* eslint-disable react/prop-types */

import babelImage from "../assets/babelLogo.png"

import { useStateContext } from "../contexts/contextProvider.jsx";
import {Link} from "react-router-dom";
import axiosClient from "../axiosClient.js";

export default function Header(){
    const {user, token, isArabic, setToken} = useStateContext();

    const handleLogout = () => {
        axiosClient.post('/logout')
        .then(() => {
            setToken(null); 
        })
        .catch(err => {
            console.error("Logout error:", err);
        });
    };

    function headerLink(){
        if(token){
            return(
                <>
                    <span style={{color:"black", width:"130px",fontSize:"14px"}}>
                        {user.name}
                    </span>
                    <span onClick={handleLogout} className="logout-link" style={{ cursor: "pointer" }}>
                        {isArabic ? "تسجيل الخروج" : "Logout"}
                    </span>
                </>
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
                {headerLink()}
            </div>
            <div className="image-part">
                <img src={babelImage} alt="Logo" className="logo" />
                <span>{isArabic ? "الأخبار المحلية" : "Local News"}</span>
            </div>

        </header>

    )
}