import Header from "./Header"
import MainNewsCarousel from "./MainCarousel/MainNewsCarousel";
import NewsCategories from "./NewsCategories/NewsCategories";
import MostRead from "./MostRead"
import Footer from "./Footer"
import { useState } from "react";
import NewsPage from "./NewsPage";
import eng from "../assets/eng.png";
import ara from "../assets/ara.png";

export default function Home(){

    const [isArabic, setIsArabic] = useState(false);

    function toggleLanguage(){
        setIsArabic(prev => !prev); 
    }



    const [showNewsDetails, setShowNewsDetails] = useState(false); 
    const [newsDetails, setNewsDetails] = useState(null);

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
                            <input type="checkbox" onChange={toggleLanguage}/>
                            <span className="slider">
                                <div className="settings-image-container">
                                    <img src={`${isArabic ? ara : eng}`} alt="language-toggle" className="circle-image" />    
                                </div>
                            </span>
                        </label>
                    </div>
                    <Header isArabic={isArabic} />
                    <MainNewsCarousel isArabic={isArabic}/>
                    <NewsCategories onCategoryClick={handleCategoryClick} isArabic={isArabic} />
                    <MostRead isArabic={isArabic} />
                    <Footer isArabic={isArabic} />
                </>
            )}
        </article>
    )
}
