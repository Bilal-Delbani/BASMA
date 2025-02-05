/* eslint-disable react/prop-types */
import { useStateContext } from "../../contexts/contextProvider.jsx";

export default function Carousel(props){
    const {isArabic} = useStateContext();

        
    return(
        <>
            <img 
                src={props.img.src}
                alt={props.img.alt}
                aria-label={props.img.ariaLabel}
            />

            <div className={`newsSummary ${isArabic ? 'rtl' : ''}`}>
                <h3 className="title">{props.title}</h3>
                <p className="summary">{props.summary}</p>
                <button className={`button-more ${isArabic ? 'rtl' : ''}`}><span>{isArabic ? "المزيد" : "More"}</span></button>
            </div>
        </>
    )
}