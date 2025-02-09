/* eslint-disable react/prop-types */

import "./RegisterForm.css"; // Add styles for the form
import { useRef } from "react";
import { useStateContext } from "../../contexts/contextProvider.jsx";
import { Link, useNavigate} from "react-router-dom";

import axiosClient from "../../axiosClient.js";


export default function RegisterForm() {
    const {isArabic, error, setUser, setToken, setError} = useStateContext();
    const navigate = useNavigate();

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();



    const Submit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,

        }

        axiosClient.post("/register", payload).then(({data}) =>{
            setUser(data.user);
            setToken(data.token);
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 422){

                if(response.data.errors.email!==''){
                    setError(prevErrors => ({ ...prevErrors, email: response.data.errors.email }));
                }
                if(response.data.errors.password!==''){
                    setError(prevErrors => ({ ...prevErrors, password: response.data.errors.password }));
                }


            }
        });
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className={`close-button ${isArabic ? 'rtl' : ''}`} onClick={()=>navigate("/guest")}>&times;</button>

                <h2 className="form-title">{isArabic ? "إنشاء حساب جديد" : "Create New Account"}</h2>

                <form onSubmit={Submit} className="register-form" method="post">
                    {/* User Name */}
                    <div className={`form-input special_input ${isArabic ? 'rtl' : ''}`} >
                        <label htmlFor="user_name"><i className="fa fa-user" aria-hidden="true"></i></label>
                        <input 
                            type="text"
                            placeholder={isArabic ? "ادخل إسمك" : "Enter your name"}
                            aria-label={isArabic ? "ادخل إسمك" : "Enter your name"}
                            id="user_name"
                            name="user_name"
                            ref={nameRef}
                            required
                        />
                    </div>

                    {/* Email */}
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

                    {/* Password */}
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

                    <button type="submit" className="register-button">{isArabic ? "سجّل" : "Register"}</button>

                    <p className="form-guest-question">
                        {isArabic ? "هل لديك حساب؟" : "Already have an Account? "} <Link to='/guest/login'>{isArabic ? "تسجيل الدخول" : "Login"}</Link> 
                    </p>


                </form>
            </div>
        </div>
    );
};