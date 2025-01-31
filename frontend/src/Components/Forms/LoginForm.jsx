/* eslint-disable react/prop-types */

 import "./RegisterForm.css"; // Add styles for the form
 import { useStateContext } from "../../contexts/contextProvider.jsx";
 import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import AuthContext from '../../context/AuthContext';

export default function LoginForm() {
    const {isArabic} = useStateContext();
    const navigate = useNavigate();

    // const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // if (!isOpen) return null;

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await login({ email, password });
    //         alert('Logged in successfully!');
    //     } catch (error) {
    //         alert('Login failed: ' + error.response.data.message);
    //     }
    // };

    // onSubmit={handleSubmit}

    const Submit = (ev) => {
        ev.preventDefault();
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className={`close-button ${isArabic ? 'rtl' : ''}`} onClick={() => navigate("/guest")}>&times;</button>

                <h2 className="form-title">{isArabic ? "نموذج تسجيل الدخول" : "Login Form"}</h2>

                <form onSubmit={Submit} className="register-form">
                    <div className={`form-input ${isArabic ? 'rtl' : ''}`}>
                        <label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i></label>
                        <input 
                            type="email"
                            placeholder={isArabic ? "البريد الالكتروني: example@gmail.com" : "example@gmail.com"}
                            aria-label={isArabic ? "ادخل البريد الالكتروني" : "Enter your email"}
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={`form-input ${isArabic ? 'rtl' : ''}`}>
                        <label htmlFor="password"><i className="fa fa-key" aria-hidden="true"></i></label>
                        <input 
                            type="password"
                            placeholder={isArabic ? "ادخل كلمة المرور" : "Enter your password"}
                            aria-label={isArabic ? "ادخل كلمة المرور" : "Enter your password"}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <p className="form-guest-question">
                    {isArabic ? "غير مسجل؟ " : "Not Registered? "}<Link to='/guest/register'>{isArabic ? "إنشاء حساب جديد" : "Create New Account"}</Link> 
                    </p>
                    <button className="register-button">{isArabic ? "تسجيل الدخول" : "Login"}</button>
                </form>
            </div>
        </div>
    );
}
