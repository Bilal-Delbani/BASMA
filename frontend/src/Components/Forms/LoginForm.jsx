/* eslint-disable react/prop-types */

import "./RegisterForm.css"; // Add styles for the form
import { useStateContext } from "../../contexts/contextProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axiosClient from "../../axiosClient.js";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginForm() {
    const [captcha, setCaptcha] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();

    const {isArabic, error, setUser, setToken, setError} = useStateContext();
    const navigate = useNavigate();



    const Submit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            recaptcha: captcha,
        }
        axiosClient.post("/login", payload).then(({data}) =>{
            setUser(data.user);
            setToken(data.access_token);
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 401){
                alert("Unauthorized User, please check your credentials if you already have an account; otherwise, you can create a new one");
            }
            if(response && response.status === 422){
                if(response.data.email!==''){
                    setError(prevErrors => ({ ...prevErrors, email: response.data.email }));
                }
                if(response.data.password!==''){
                    setError(prevErrors => ({ ...prevErrors, password: response.data.password }));
                }
                if(response.data.recaptcha!==''){
                    setError(prevErrors => ({ ...prevErrors, recaptcha: response.data.recaptcha }));
                }
            }
        });
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className={`close-button ${isArabic ? 'rtl' : ''}`} onClick={() => navigate("/guest")}>&times;</button>

                <h2 className="form-title">{isArabic ? "تسجيل الدخول إلى حسابك" : "Login To Your Account"}</h2>

                <form onSubmit={Submit} className="register-form">
                    <div className={`form-input ${isArabic ? 'rtl' : ''} ${error.email ? 'err' : ''}`}>
                        <label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i></label>
                        <input 
                            type="email"
                            placeholder="example@gmail.com"
                            aria-label={isArabic ? "ادخل البريد الالكتروني" : "Enter your email"}
                            id="email"
                            name="email"
                            ref={emailRef}
                            required

                        />
                    </div>
                    <p className="error" style={{ visibility: error.email ? 'visible' : 'hidden' }}>{error.email}</p>


                    <div className={`form-input ${isArabic ? 'rtl' : ''} ${error.password ? 'err' : ''}`}>
                        <label htmlFor="password"><i className="fa fa-key" aria-hidden="true"></i></label>
                        <input 
                            type="password"
                            placeholder={isArabic ? "ادخل كلمة المرور" : "Enter your password"}
                            aria-label={isArabic ? "ادخل كلمة المرور" : "Enter your password"}
                            id="password"
                            name="password"
                            ref={passwordRef}
                            required

                        />
                    </div>
                    <p className="error" style={{ visibility: error.password ? 'visible' : 'hidden' }}>{error.password}</p>


                    <ReCAPTCHA
                        // sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        onChange={(value) => setCaptcha(value)}
                    />  {/* use recaptcha to prevent Brute Force Attacks, reduce Bot Activity and block Credential Stuffing*/}
                    

                    <p className="error" style={{ visibility: error.recaptcha ? 'visible' : 'hidden' }}>{error.recaptcha}</p>


                    <button className="register-button">{isArabic ? "تسجيل الدخول" : "Login"}</button>

                    <p className="form-guest-question">
                    {isArabic ? "غير مسجل؟ " : "Not Registered? "}<Link to='/guest/register'>{isArabic ? "إنشاء حساب جديد" : "Create New Account"}</Link> 
                    </p>

                    
                </form>
            </div>
        </div>
    );
}
