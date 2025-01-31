/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import Category from "./Category";
import { useStateContext } from "../../contexts/contextProvider.jsx";

export default function NewsCategories({onCategoryClick}){
    const {isArabic} = useStateContext();

    const [englishData, setEnglishData] = useState([]);
    const [arabicData, setArabicData] = useState([]);
    const [news, setNews] = useState([]);

    // Fetch both English and Arabic data
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const [engResponse, arResponse] = await Promise.all([
                    fetch('/newsCarouselData.json'),
                    fetch('/newsCarouselDataAr.json')
                ]);

                const [engData, arData] = await Promise.all([
                    engResponse.json(),
                    arResponse.json()
                ]);

                setEnglishData(engData);
                setArabicData(arData);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };

        fetchNews();
    }, []);


    useEffect(() => {
        if (isArabic) {
            setNews(arabicData);
        } else {
            setNews(englishData);
        }
    }, [isArabic, englishData, arabicData]);



    const newsCategories = news.map((item) => {
        return (
            <Category
                key={item.id}
                {...item}
                onCategoryClick = {onCategoryClick}
            />
        );
    });
    
    return(
       <section className={`news-categories ${isArabic ? 'rtl' : ''}`}>
            {newsCategories}
       </section> 
    )
}