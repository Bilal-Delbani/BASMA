/* eslint-disable react/prop-types */
import mostRead from "../assets/most-read.jpg"


export default function MostRead(props){
    return(
        <div className={`most-read-section ${props.isArabic ? 'rtl' : ''}`}>

            <div className="most-read-left">
                <img src={mostRead} alt="most-read-image" />
            </div>

            <div className={`most-read-right ${props.isArabic ? 'rtl' : ''}`}>
                <h3 id="most-read-title">{props.isArabic ? "الاكثر قراءة" : "Most Read"}</h3>

                <div className="most-read-row1">
                    <div className={`most-read-row1-header ${props.isArabic ? 'rtl' : ''}`}>
                        <span>&#45;</span>
                        <h3>{props.isArabic ? "الكلمات العشوائية" : "The Random Words"}</h3>
                    </div>
                    <div className={`most-read-row1-body ${props.isArabic ? 'rtl' : ''}`}>
                        <p>
                            {!props.isArabic ?
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus enim quia vitae blanditiis, aliquam labore reprehenderit doloribus ipsum quas ipsam."    
                            :
                            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص. إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس هناك أي كلمات أو عبارات مح" 
                        }
                            
                        </p>
                    </div>
                </div>


                <div className={`most-read-row2 ${props.isArabic ? 'rtl' : ''}`}>
                    <span>&#43;</span>
                    <div className="most-read-row2-body">
                        <p>
                            {!props.isArabic ?
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui"
                            :
                            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم تعديلها بشكل ما" 
                            }
                        </p>
                    </div>
                </div>

                <div className={`most-read-row3 ${props.isArabic ? 'rtl' : ''}`}>
                    <span>&#43;</span>
                    <div className="most-read-row3-body">
                        <p>
                            {!props.isArabic ?
                            "Lorem ipsum dolor sit amet consectetur adipisicing"
                            :
                            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم" 
                            }
                        </p>
                    </div>
                </div>

                <div className={`most-read-row4 ${props.isArabic ? 'rtl' : ''}`}>
                    <span>&#43;</span>
                    <div className="most-read-row4-body">
                        <p>
                            {!props.isArabic ?
                            "Lorem ipsum dolor sit amet consectetur"
                            :
                            "هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم،" 
                            }
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}