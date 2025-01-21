/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import Category from "./Category";

export default function NewsCategories({onCategoryClick}){


    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('/newsCarouselData.json')
        .then((response) => response.json())
        .then((data) => setNews(data))
        .catch((error) => console.error("Error loading JSON:", error));
    }, []);

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
       <section className="news-categories">
            {newsCategories}
       </section> 
    )
}