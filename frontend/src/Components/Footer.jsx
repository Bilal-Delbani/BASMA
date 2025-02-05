/* eslint-disable react/prop-types */
import { useStateContext } from "../contexts/contextProvider.jsx";

export default function Footer(){
    const {isArabic} = useStateContext();
    
    return(
        <footer>
            <div className={`footer-body ${isArabic ? 'rtl' : ''}`}>
                <div className={`footer-left ${isArabic ? 'rtl' : ''}`}>
                    <div id={`footer-left-title${isArabic ? '-rtl' : ''}`}>
                        <h4>{isArabic ? "مشاهدة على تويتر" : "View on Twitter"}</h4>
                    </div>

                    <div className={`contact ${isArabic ? 'rtl' : ''}`}>
                        <a href="#" className={`fa ${isArabic ? 'fa-linkedin rtl' : 'fa-twitter'}`}></a>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className={`fa ${isArabic ? 'fa-twitter rtl' : 'fa-linkedin'}`}></a>
                        <form className={`footer-form ${isArabic ? 'rtl' : ''}`} method="post">
                            <button className="footer-button">{isArabic ? "الاشتراك" : "Register"}</button>
                            <input type="text" aria-label="Register Input" placeholder={isArabic ? "سجل هنا" : "Register here"}/>

                        </form>
                    </div>

                </div>

                <div className={`footer-right ${isArabic ? 'rtl' : ''}`}>
                    <div className="column">
                        <h4>{isArabic ? "بما تتطلبه" : "As Needed"}</h4>
                        <a href="#">{isArabic ? "هنالك العديد من الأنواع" : "There are many types"}</a><br />
                        <a href="#">{isArabic ? "بعض النوادر أو الكلمات" : "Some rare items and words"}</a><br />
                        <a href="#">{isArabic ? "عليك التحقق أولاً أن" : "You must first ensure that"}</a>
                    </div>
                    <div className="column">
                        <h4>{isArabic ? "بما تتطلبه" : "As Needed"}</h4>
                        <a href="#">{isArabic ? "هنالك العديد من الأنواع" : "There are many types"}</a><br />
                        <a href="#">{isArabic ? "بعض النوادر أو الكلمات" : "Some rare items and words"}</a><br />
                        <a href="#">{isArabic ? "عليك التحقق أولاً أن" : "You must first ensure that"}</a>
                    </div>
                    <div className="column">
                        <h4>{isArabic ? "بما تتطلبه" : "As Needed"}</h4>
                        <a href="#">{isArabic ? "هنالك العديد من الأنواع" : "There are many types"}</a><br />
                        <a href="#">{isArabic ? "بعض النوادر أو الكلمات" : "Some rare items and words"}</a><br />
                        <a href="#">{isArabic ? "عليك التحقق أولاً أن" : "You must first ensure that"}</a>
                    </div>
                </div>

            </div>
            <div className="copy-rights">
                <span>{isArabic ? "www.Babel.com ©حقوق النشر " : "Copyright© www.Babel.com"}</span>
            </div>
        </footer>
    )
}