/* eslint-disable react/prop-types */
export default function Category(props){

    return(
    
        <div className={props.class}>
            <img src={props.img.src} alt={props.img.alt} aria-label={props.img.ariaLabel} />
            <div className={`category-body ${props.isArabic ? 'rtl' : ''}`}>
                <span>{props.category}</span><br />
                <button onClick={()=>props.onCategoryClick(props)} className="button-more"><span>{props.isArabic ? "المزيد" : "More"}</span></button>
            </div>
        </div>
        
    )
}

