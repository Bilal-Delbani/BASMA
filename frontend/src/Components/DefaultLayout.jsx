import Header from "./Header.jsx"
import MainNewsCarousel from "./MainCarousel/MainNewsCarousel.jsx";
import NewsCategories from "./NewsCategories/NewsCategories.jsx";
import MostRead from "./MostRead.jsx"
import Footer from "./Footer.jsx"
import NewsPage from "./NewsPage.jsx";

import eng from "../assets/eng.png";
import ara from "../assets/ara.png";

import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/contextProvider.jsx";
import { Navigate } from "react-router-dom";

export default function DefaultLayout(){
    const {token, isArabic, setIsArabic} = useStateContext();
    const [showNewsDetails, setShowNewsDetails] = useState(false); 
    const [newsDetails, setNewsDetails] = useState(null);
    
    useEffect(() => {
        // Scroll to top whenever the page is rendered
        window.scrollTo(0, 0);
      }, []);


    if(!token){
        return <Navigate to='/guest' />
    }

  


    function handleCategoryClick(data) {
        setNewsDetails(data);  
        setShowNewsDetails(true);  
    }

    function handleBackButtonClick() {
        setShowNewsDetails(false);  
        setNewsDetails(null);  
    }


    return (
        <article className="Home-page"> 
            {showNewsDetails ? (
                <NewsPage data={newsDetails} onBack={handleBackButtonClick}/>
            ) : (

                <>

                    <div className="settings">
                        <label className="toggle-switch">
                            <input type="checkbox" onChange={() => setIsArabic()}/>
                            <span className="slider">
                                <div className="settings-image-container">
                                    <img src={`${isArabic ? ara : eng}`} alt="language-toggle" className="circle-image" />    
                                </div>
                            </span>
                        </label>
                    </div>
                    <Header/>
                    <MainNewsCarousel />
                    <NewsCategories onCategoryClick={handleCategoryClick} />
                    <MostRead />
                    <Footer />           

                </>
            )}
        </article>
    )
}
