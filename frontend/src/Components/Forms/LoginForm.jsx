/* eslint-disable react/prop-types */

 import "./RegisterForm.css"; // Add styles for the form
 import { useStateContext } from "../../contexts/contextProvider.jsx";
 import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../../axiosClient.js";

export default function LoginForm() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {isArabic, error, setUser, setToken, setError} = useStateContext();
    const navigate = useNavigate();



    const Submit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
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
                // console.log(response.data.email)
                if(response.data.email!==''){
                    setError(prevErrors => ({ ...prevErrors, email: response.data.email }));
                }
                if(response.data.password!==''){
                    setError(prevErrors => ({ ...prevErrors, password: response.data.password }));
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

                        />
                    </div>
                    <p className="error" style={{ visibility: error.password ? 'visible' : 'hidden' }}>{error.password}</p>

                    <button className="register-button">{isArabic ? "تسجيل الدخول" : "Login"}</button>

                    <p className="form-guest-question">
                    {isArabic ? "غير مسجل؟ " : "Not Registered? "}<Link to='/guest/register'>{isArabic ? "إنشاء حساب جديد" : "Create New Account"}</Link> 
                    </p>

                    
                </form>
            </div>
        </div>
    );
}
