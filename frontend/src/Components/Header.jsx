/* eslint-disable react/prop-types */

import babelImage from "../assets/babelLogo.png"

export default function Header(props){


    return(
        <header>
            <div className="link-part">
                <a href="#register" className="register-link">{props.isArabic ? "تسجيل الدخول" : "Registration"}</a>
            </div>
            <div className="image-part">
                <img src={babelImage} alt="Logo" className="logo" />
                <span>{props.isArabic ? "الأخبار المحلية" : "Local News"}</span>
            </div>

        </header>

    )
}