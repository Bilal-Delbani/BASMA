import NavMenu from "./NavMenu";
import Carousel from "./Carousel"
import { useState, useEffect } from "react";

export default function MainNewsCarousal(){

    const [images, setImages] = useState([]);
    const [index, setIndex] = useState(0);
      
    useEffect(() => {
        fetch('/newsCarouselData.json')
        .then((response) => response.json())
        .then((data) => setImages(data))
        .catch((error) => console.error("Error loading JSON:", error));
    }, []);



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

    // Clear the interval when the component unmounts
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

            <div className="carousel-indicators">
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

