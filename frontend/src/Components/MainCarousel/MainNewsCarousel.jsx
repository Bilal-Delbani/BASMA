
import NavMenu from "./NavMenu";
import Carousel from "./Carousel"
import { useState, useEffect } from "react";
import { useStateContext } from "../../contexts/contextProvider.jsx";


export default function MainNewsCarousal(){
    const {isArabic} = useStateContext();
    const [englishData, setEnglishData] = useState([]);
    const [arabicData, setArabicData] = useState([]);
    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);


    // Fetch both English and Arabic data
    useEffect(() => {
        const fetchImages = async () => {
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

        fetchImages();
    }, []);


    useEffect(() => {
        if (isArabic) {
            setImages(arabicData);
        } else {
            setImages(englishData);
        }
    }, [isArabic, englishData, arabicData]);




    const carousel = images.map((item) => {
        return(
            <Carousel
                key={item.id}
                {...item}
            />
        )
    }
)

  // Set up automatic carousel rotation with proper cleanup
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]); // Dependency array to restart the effect if the images change


    return(
        <main className="main-carousel">
            <NavMenu />
            {carousel.length > 0 && carousel[index]}

            {/* arrows for mobile screen sizes */}
            <div className="arrowCarousel">
                <span className="leftArrow"></span>
                <span className="rightArrow"></span>
            </div>

            {/* box indicators for desktop screen sizes */}
            <div className={`carousel-indicators ${isArabic ? 'rtl' : ''}`}>
                {images.map((_, idx) => (
                    <div
                        key={idx}
                        className={`indicator ${idx === index ? "active" : ""}`}
                    />
                ))}
            </div>


        </main>
    )
}
