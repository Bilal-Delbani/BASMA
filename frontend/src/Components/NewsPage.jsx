/* eslint-disable react/prop-types */
import React from "react"
import { useEffect } from 'react';

export default function NewsPage({data, onBack}){
    useEffect(() => {
        // Scroll to top whenever the page is rendered
        window.scrollTo(0, 0);
      }, []);
    return(
       <article className="news-details">
            <div className="news-details-title">
                <button onClick={()=>onBack()}>&larr;</button>
                <h2>{data.summary}</h2>
            </div>
            <div className="news-details-image">
                {data.navigation === "videos" ? 
                    (
                        <video controls loop={0}>
                            <source src={data.video.src} type="video/mp4" alt={data.video.alt} />
                        </video>
                    ):
                    (
                        <img src={data.img.src} alt={data.img.alt} />
                    )
                }
            </div>
            <div className={`news-details-article ${data.isArabic ? 'rtl' : ''}`}>
                {data.article.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    {line}
                    <br />
                    </React.Fragment>
                ))}
            </div>

       </article>
    )
}

