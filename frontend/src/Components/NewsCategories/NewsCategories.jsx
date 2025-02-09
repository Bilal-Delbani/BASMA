import { useState, useEffect } from "react";
import Category from "./Category";
import { useStateContext } from "../../contexts/contextProvider.jsx";
import axiosClient from "../../axiosClient.js";

export default function NewsCategories({ onCategoryClick }) {
    const { isArabic } = useStateContext();
    const [englishData, setEnglishData] = useState(null);
    const [arabicData, setArabicData] = useState(null);
    const [news, setNews] = useState(null);
    const [newsCategories, setNewsCategories] = useState([]); // Store processed categories
    const [loading, setLoading] = useState(true);

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
                setLoading(false); // Data has been fetched

            } catch (error) {
                console.error("Error fetching images:", error);
                setLoading(false); // Avoid infinite loading state
            }
        };

        fetchNews();
    }, []);

    useEffect(() => {
        if (englishData && arabicData) {
            setNews(isArabic ? arabicData : englishData);
        }
    }, [isArabic, englishData, arabicData]);

    useEffect(() => {
        if (news && news.length > 0) {
            axiosClient.get('/categories/analytics/24hours', { params: { news } })
                .then(({ data }) => {
                    console.log(data)
                    const processedCategories = data.map((item, index) => {
                        let class_Name = index === 0 ? "large-box" : "small-box";

                        return (
                            <Category
                                key={index}
                                {...item}
                                onCategoryClick={onCategoryClick}
                                class_Name={class_Name}
                            />
                        );
                    });
                    setNewsCategories(processedCategories);
                })
                .catch(err => {
                    const response = err.response;
                    if (response && response.status === 401) {
                        alert(response.data.error);
                    }
                });
        }
    }, [news]); // Only run when news is ready

    // Show loading message
    if (loading) return <p style={{color:"black"}}>Loading news...</p>;

    return (
        <section className={`news-categories ${isArabic ? 'rtl' : ''}`}>
            {newsCategories}
        </section>
    );
}
