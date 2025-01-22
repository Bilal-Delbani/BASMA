/* eslint-disable react/prop-types */

export default function Footer(props){
    return(
        <footer>
            <div className={`footer-body ${props.isArabic ? 'rtl' : ''}`}>
                <div className={`footer-left ${props.isArabic ? 'rtl' : ''}`}>
                    <div id={`footer-left-title${props.isArabic ? '-rtl' : ''}`}>
                        <h4>{props.isArabic ? "مشاهدة على تويتر" : "View on Twitter"}</h4>
                    </div>

                    <div className={`contact ${props.isArabic ? 'rtl' : ''}`}>
                        <a href="#" className={`fa ${props.isArabic ? 'fa-linkedin rtl' : 'fa-twitter'}`}></a>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className={`fa ${props.isArabic ? 'fa-twitter rtl' : 'fa-linkedin'}`}></a>
                        <form className={`register-form ${props.isArabic ? 'rtl' : ''}`} method="post">
                            <button className="register-button">{props.isArabic ? "الاشتراك" : "Register"}</button>
                            <input type="text" aria-label="Register Input" placeholder={props.isArabic ? "سجل هنا" : "Register here"}/>

                        </form>
                    </div>

                </div>

                <div className={`footer-right ${props.isArabic ? 'rtl' : ''}`}>
                    <div className="column">
                        <h4>{props.isArabic ? "بما تتطلبه" : "As Needed"}</h4>
                        <a href="#">{props.isArabic ? "هنالك العديد من الأنواع" : "There are many types"}</a><br />
                        <a href="#">{props.isArabic ? "بعض النوادر أو الكلمات" : "Some rare items and words"}</a><br />
                        <a href="#">{props.isArabic ? "عليك التحقق أولاً أن" : "You must first ensure that"}</a>
                    </div>
                    <div className="column">
                        <h4>{props.isArabic ? "بما تتطلبه" : "As Needed"}</h4>
                        <a href="#">{props.isArabic ? "هنالك العديد من الأنواع" : "There are many types"}</a><br />
                        <a href="#">{props.isArabic ? "بعض النوادر أو الكلمات" : "Some rare items and words"}</a><br />
                        <a href="#">{props.isArabic ? "عليك التحقق أولاً أن" : "You must first ensure that"}</a>
                    </div>
                    <div className="column">
                        <h4>{props.isArabic ? "بما تتطلبه" : "As Needed"}</h4>
                        <a href="#">{props.isArabic ? "هنالك العديد من الأنواع" : "There are many types"}</a><br />
                        <a href="#">{props.isArabic ? "بعض النوادر أو الكلمات" : "Some rare items and words"}</a><br />
                        <a href="#">{props.isArabic ? "عليك التحقق أولاً أن" : "You must first ensure that"}</a>
                    </div>
                </div>

            </div>
            <div className="copy-rights">
                <span>{props.isArabic ? "www.Babel.com ©حقوق النشر " : "Copyright© www.Babel.com"}</span>
            </div>
        </footer>
    )
}