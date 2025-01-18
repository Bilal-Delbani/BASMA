import mostRead from "../assets/most-read.jpg"

export default function MostRead(){
    return(
        <div className="most-read-section">
            
            <div className="most-read-left">
                <h3 id="most-read-title">Most Read</h3>

                <div className="most-read-row1">
                    <div className="most-read-row1-header">
                        <span>&#45;</span>
                        <h3>The Random Words</h3>
                    </div>
                    <div className="most-read-row1-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus enim quia vitae blanditiis, aliquam labore reprehenderit doloribus ipsum quas ipsam.</p>
                    </div>
                </div>


                <div className="most-read-row2">
                    <span>&#43;</span>
                    <div className="most-read-row2-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui</p>
                    </div>
                </div>

                <div className="most-read-row3">
                    <span>&#43;</span>
                    <div className="most-read-row3-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing</p>
                    </div>
                </div>

                <div className="most-read-row4">
                    <span>&#43;</span>
                    <div className="most-read-row4-body">
                        <p>Lorem ipsum dolor, sit amet consectetur</p>
                    </div>
                </div>

            </div>

            <div className="most-read-right">
                <img src={mostRead} alt="most-read-image" />
            </div>
        </div>
    )
}