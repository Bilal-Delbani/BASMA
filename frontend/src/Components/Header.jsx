import babelImage from "/babelLogo.png"

export default function Header(){
    return(
        <header>
            <div className="link-part">
                <a href="#register" className="register-link">Registration</a>
            </div>
            <div className="image-part">
                <img src={babelImage} alt="Logo" className="logo" />
                <span>Local News</span>
            </div>


        </header>

    )
}