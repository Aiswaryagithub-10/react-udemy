import cc1 from "../assets/images/cc1.jpeg"
import cc2 from "../assets/images/cc2.jpeg"
import cc3 from "../assets/images/cc3.jpeg"
import cc4 from "../assets/images/cc4.jpeg"
import cc5 from "../assets/images/cc5.jpeg"
import cc6 from "../assets/images/cc6.jpeg"
import cc7 from "../assets/images/cc7.jpeg"
import cc8 from "../assets/images/cc8.jpeg"

function Popular(){
    return(
<div className="popular">
        <h1 className="popular__title">Most popular</h1>
        <p className="popular__subtitle">Pick the best fit</p>
        <div className="popularcontainer">
    
            <div className="courses__card">
                <img src={cc1}></img>
                <h3>2023 Python Masterclass</h3>
                <p>Col steel</p>
                <p>5.0⭐⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="courses__card">
                <img src={cc2}></img>
                <h3>Ethical Hacking</h3>
                <p>John mathew</p>
                <p>3.0⭐⭐⭐</p>
                <p>699 <del>1699</del></p>
            </div>

            <div className="courses__card">
                <img src={cc3}></img>
                <h3>Gen AI learning</h3>
                <p>Antony Joseph</p>
                <p>2.0⭐⭐</p>
                <p>599 <del>1599</del></p>
            </div>

            <div className="courses__card">
                <img src={cc4}></img>
                <h3>Java Developer</h3>
                <p>Col steel</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>299 <del>999</del></p>
            </div>

            <div className="courses__card">
                <img src={cc5}></img>
                <h3>Bootstrap</h3>
                <p>John mathew</p>
                <p>3.0⭐⭐⭐</p>
                <p>699 <del>1699</del></p>
            </div>

            <div className="courses__card">
                <img src={cc6}></img>
                <h3>2024 Python Masterclass</h3>
                <p>Col steel</p>
                <p>5.0⭐⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div className="courses__card">
                <img src={cc7}></img>
                <h3>React Developer</h3>
                <p>Col steel</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>299 <del>999</del></p>
            </div>

            <div className="courses__card">
                <img src={cc8}></img>
                <h3>Machine Learning</h3>
                <p>Antony Joseph</p>
                <p>2.0⭐⭐</p>
                <p>599 <del>1599</del></p>
            </div>
             </div>
    </div>
    )
}
export default Popular