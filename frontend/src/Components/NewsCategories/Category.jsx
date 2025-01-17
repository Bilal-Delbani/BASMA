/* eslint-disable react/prop-types */
export default function Category(props){
    return(
       <div className={props.class}>
            <img src={props.img.src} alt={props.img.alt} aria-label={props.img.ariaLabel} />
            <span>{props.category}</span><br />
            <button>More</button>
       </div>
    )
}