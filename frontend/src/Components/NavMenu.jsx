import { useState } from "react"

export default function NavMenu(){
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
            {flag && <ul className="menu">
                <li id="Home"><a href="#" aria-label="Home">Home</a></li>
                <li><a href="#" aria-label="News">News</a></li>
                <li><a href="#" aria-label="Economy">Economy</a></li>
                <li><a href="#" aria-label="Sports">Sports</a></li>
                <li><a href="#" aria-label="Culture">Culture</a></li>
                <li><a href="#" aria-label="Videos and Phots">Videos and Photos</a></li>
                <li><a href="#" aria-label="Opinions">Opinions</a></li>
            </ul>}
            {!flag && <ul className="active">
                <li id="Home"><a href="#" aria-label="Home">Home</a></li>
                <li><a href="#" aria-label="News">News</a></li>
                <li><a href="#" aria-label="Economy">Economy</a></li>
                <li><a href="#" aria-label="Sports">Sports</a></li>
                <li><a href="#" aria-label="Culture">Culture</a></li>
                <li><a href="#" aria-label="Videos and Phots">Videos and Photos</a></li>
                <li><a href="#" aria-label="Opinions">Opinions</a></li>
            </ul>}
        </nav>
    )
}