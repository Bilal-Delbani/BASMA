export default function Footer(){
    return(
        <footer>
            <div className="footer-body">
                <div className="footer-left">
                    <div id="footer-left-title">
                        <h4>View on Twitter</h4>
                    </div>

                    <div className="contact">
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <form className="register-form" method="post">
                            <button className="register-button">Register</button>
                            <input type="text" aria-label="Register Input" placeholder="Register here"/>

                        </form>
                    </div>

                </div>

                <div className="footer-right">
                    <div className="column">
                        <h4>As Needed</h4>
                        <a href="#">There are many types</a><br />
                        <a href="#">Some rare items and words</a><br />
                        <a href="#">You must first ensure that</a>
                    </div>
                    <div className="column">
                        <h4>As Needed</h4>
                        <a href="#">There are many types</a><br />
                        <a href="#">Some rare items and words</a><br />
                        <a href="#">You must first ensure that</a>
                    </div>
                    <div className="column">
                        <h4>As Needed</h4>
                        <a href="#">There are many types</a><br />
                        <a href="#">Some rare items and words</a><br />
                        <a href="#">You must first ensure that</a>
                    </div>
                </div>

            </div>
            <div className="copy-rights">
                <span>Copyright&#169; www.Babel.com</span>
            </div>
        </footer>
    )
}