
/* eslint-disable react/prop-types */
import { useState } from "react"

export default function NavMenu(props){

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
            {flag && <ul className={`menu ${props.isArabic ? 'rtl' : ''}`}>
                <li id={`${props.isArabic ? 'Homerlt' : 'Home'}`}><a href="#" aria-label="Home">{`${!props.isArabic ? "Home" : "الرئيسية"}`}</a></li>
                <li><a href="#" aria-label="News">{`${!props.isArabic ? "News" : "اخبار" }`}</a></li>
                <li><a href="#" aria-label="Economy">{`${!props.isArabic ? "Economy" : "اقتصاد"}`}</a></li>
                <li><a href="#" aria-label="Sports">{`${!props.isArabic ? "Sports" : "رياضة"}`}</a></li>
                <li><a href="#" aria-label="Culture">{`${!props.isArabic ? "Culture" : "ثقافة"}`}</a></li>
                <li><a href="#" aria-label="Videos and Phots">{`${!props.isArabic ? "Videos and Photos" : "فيديو وصور"}`}</a></li>
                <li id={`${props.isArabic ? 'Opinion' : ''}`}><a href="#" aria-label="Opinions">{`${!props.isArabic ? "Opinions" : "اراء"}`}</a></li>
            </ul>}
            {!flag && <ul className="active">
                <li id="Home"><a href="#" aria-label="Home">{`${!props.isArabic ? "Home" : "الرئيسية"}`}</a></li>
                <li><a href="#" aria-label="News">{`${!props.isArabic ? "News" : "اخبار" }`}</a></li>
                <li><a href="#" aria-label="Economy">{`${!props.isArabic ? "Economy" : "اقتصاد"}`}</a></li>
                <li><a href="#" aria-label="Sports">{`${!props.isArabic ? "Sports" : "رياضة"}`}</a></li>
                <li><a href="#" aria-label="Culture">{`${!props.isArabic ? "Culture" : "ثقافة"}`}</a></li>
                <li><a href="#" aria-label="Videos and Phots">{`${!props.isArabic ? "Videos and Photos" : "فيديو وصور"}`}</a></li>
                <li><a href="#" aria-label="Opinions">{`${!props.isArabic ? "Opinions" : "اراء"}`}</a></li>
            </ul>}

        </nav>
    )
}

