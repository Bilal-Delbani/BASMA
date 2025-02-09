/* eslint-disable react/prop-types */
import { useStateContext } from "../../contexts/contextProvider";
import axiosClient from "../../axiosClient.js";

export default function Category(props){
    const {user, isArabic} = useStateContext();



    function handleClick(){
        //save the click
        const payload = {
            id : user.id
        };
        axiosClient.post(`/categories/${props.info.navigation}/click`,payload).then(()=>
            //show Category Details
            props.onCategoryClick(props)
        ).catch(err => {
            const response = err.response;
            if(response && response.status === 401){
                alert(response.data.error);
            }
        });
    }

    return(
    
        <div className={props.class_Name} >
            <img src={props.info.img.src} alt={props.info.img.alt} aria-label={props.info.img.ariaLabel} />
            <div className={`category-body ${isArabic ? 'rtl' : ''}`}>
                <span>{props.info.category}</span><br />
                <button onClick={handleClick} className="button-more"><span>{isArabic ? "المزيد" : "More"}</span></button>
            </div>
        </div>
        
    )
}

