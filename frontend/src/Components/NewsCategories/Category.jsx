/* eslint-disable react/prop-types */
import { useStateContext } from "../../contexts/contextProvider";

export default function Category(props){
    const {isArabic} = useStateContext();

    return(
    
        <div className={props.class}>
            <img src={props.img.src} alt={props.img.alt} aria-label={props.img.ariaLabel} />
            <div className={`category-body ${isArabic ? 'rtl' : ''}`}>
                <span>{props.category}</span><br />
                <button onClick={()=>props.onCategoryClick(props)} className="button-more"><span>{isArabic ? "المزيد" : "More"}</span></button>
            </div>
        </div>
        
    )
}

