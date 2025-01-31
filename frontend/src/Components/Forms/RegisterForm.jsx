/* eslint-disable react/prop-types */

import "./RegisterForm.css"; // Add styles for the form
import { useState, useContext } from "react";
import AuthContext from '../../context/AuthContext';

export default function RegisterForm({ isOpen, onClose, isArabic }) {
  
    const { register } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({}); // Stores validation errors

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ name, email, password, password_confirmation });
            alert('Registered successfully!');
        } catch (error) {
            console.log(error);
            setErrors(error.response?.data?.errors || {});
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className={`close-button ${isArabic ? 'rtl' : ''}`} onClick={onClose}>&times;</button>

                <h2 className="form-title">{isArabic ? "نموذج التسجيل" : "Registration Form"}</h2>

                <form onSubmit={handleSubmit} className="register-form" method="post">
                    <div className={`form-input ${isArabic ? 'rtl' : ''}`}>
                        <label htmlFor="user_name"><i className="fa fa-user" aria-hidden="true"></i></label>
                        <input 
                            type="text"
                            placeholder={isArabic ? "ادخل إسمك" : "Enter your name"}
                            aria-label={isArabic ? "ادخل إسمك" : "Enter your name"}
                            id="user_name"
                            name="user_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p style={{color:"red"}} className="error">{errors.name[0]}</p>}
                    </div>

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
                        {errors.email && <p className="error">{errors.email[0]}</p>}
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

                    <div className={`form-input ${isArabic ? 'rtl' : ''}`}>
                        <label htmlFor="password_confirmation"><i className="fa fa-lock" aria-hidden="true"></i></label>
                        <input 
                            type="password"
                            placeholder={isArabic ? "تأكيد كلمة المرور" : "Confirm your password"}
                            aria-label={isArabic ? "نأكيد كلمة المرور" : "Confirm your password"}
                            id="password_confirmation"
                            name="password_confirmation"
                            value={password_confirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="register-button">{isArabic ? "سجّل" : "Register"}</button>
                </form>
            </div>
        </div>
    );
};
