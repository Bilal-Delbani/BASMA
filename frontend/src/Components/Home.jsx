import Header from "./Header"
import MainNewsCarousel from "./MainNewsCarousel";

export default function Home(){
    return (
        <article className="Home-page">
            <Header />
            <MainNewsCarousel/>
        </article>
    )
}