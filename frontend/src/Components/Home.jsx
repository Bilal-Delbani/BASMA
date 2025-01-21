import Header from "./Header"
import MainNewsCarousel from "./MainCarousel/MainNewsCarousel";
import NewsCategories from "./NewsCategories/NewsCategories";
import MostRead from "./MostRead"
import Footer from "./Footer"
import { useState } from "react";
import NewsPage from "./NewsPage";


export default function Home(){
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
                    <Header />
                    <MainNewsCarousel />
                    <NewsCategories onCategoryClick={handleCategoryClick} />
                    <MostRead />
                    <Footer />
                </>
            )}
        </article>
    )
}
