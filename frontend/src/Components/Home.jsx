import Header from "./Header"
import MainNewsCarousel from "./MainCarousel/MainNewsCarousel";
import NewsCategories from "./NewsCategories/NewsCategories";
import MostRead from "./MostRead"
import Footer from "./Footer"

export default function Home(){
    return (
        <article className="Home-page">
            
            <Header />
            <MainNewsCarousel />
            <NewsCategories />
            <MostRead />
            <Footer />

        </article>
    )
}