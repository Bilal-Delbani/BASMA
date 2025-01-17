/* eslint-disable react/prop-types */
export default function Carousel(props){
    return(
        <>
            <img 
                src={props.img.src}
                alt={props.img.alt}
                aria-label={props.img.ariaLabel}
            />

            <div className="newsSummary">
                <h3 className="title">{props.title}</h3>
                <p className="summary">{props.summary}</p>
            </div>
            <button>More</button>
        </>
    )
}