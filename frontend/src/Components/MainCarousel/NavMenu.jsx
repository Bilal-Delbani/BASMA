
/* eslint-disable react/prop-types */
import { useState } from "react"
import { useStateContext } from "../../contexts/contextProvider.jsx";

export default function NavMenu(){
    const {isArabic} = useStateContext();

    const [flag, setFlag] = useState(true)

    
    function toggleMenu(){
       return setFlag(prevFlag => !prevFlag)
    }
      


    window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
        return setFlag(true)
    }
    });


    
    return(
        <nav className="nav-menu">
            <span className="burger-menu" onClick={toggleMenu}>&#9776;</span>
            {flag && <ul className={`menu ${isArabic ? 'rtl' : ''}`}>
                <li id={`${isArabic ? 'Homerlt' : 'Home'}`}><a href="#" aria-label="Home">{`${!isArabic ? "Home" : "الرئيسية"}`}</a></li>
                <li><a href="#" aria-label="News">{`${!isArabic ? "News" : "اخبار" }`}</a></li>
                <li><a href="#" aria-label="Economy">{`${!isArabic ? "Economy" : "اقتصاد"}`}</a></li>
                <li><a href="#" aria-label="Sports">{`${!isArabic ? "Sports" : "رياضة"}`}</a></li>
                <li><a href="#" aria-label="Culture">{`${!isArabic ? "Culture" : "ثقافة"}`}</a></li>
                <li><a href="#" aria-label="Videos and Phots">{`${!isArabic ? "Videos and Photos" : "فيديو وصور"}`}</a></li>
                <li id={`${isArabic ? 'Opinion' : ''}`}><a href="#" aria-label="Opinions">{`${!isArabic ? "Opinions" : "اراء"}`}</a></li>
            </ul>}
            {!flag && <ul className="active">
                <li id="Home"><a href="#" aria-label="Home">{`${!isArabic ? "Home" : "الرئيسية"}`}</a></li>
                <li><a href="#" aria-label="News">{`${!isArabic ? "News" : "اخبار" }`}</a></li>
                <li><a href="#" aria-label="Economy">{`${!isArabic ? "Economy" : "اقتصاد"}`}</a></li>
                <li><a href="#" aria-label="Sports">{`${!isArabic ? "Sports" : "رياضة"}`}</a></li>
                <li><a href="#" aria-label="Culture">{`${!isArabic ? "Culture" : "ثقافة"}`}</a></li>
                <li><a href="#" aria-label="Videos and Phots">{`${!isArabic ? "Videos and Photos" : "فيديو وصور"}`}</a></li>
                <li><a href="#" aria-label="Opinions">{`${!isArabic ? "Opinions" : "اراء"}`}</a></li>
            </ul>}

        </nav>
    )
}

