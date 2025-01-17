import Header from "./Header"
import MainNewsCarousel from "./MainCarousel/MainNewsCarousel";
import NewsCategories from "./NewsCategories/NewsCategories";

export default function Home(){
    return (
        <article className="Home-page">
            <Header />
            <MainNewsCarousel />
            <NewsCategories />
        </article>
    )
}