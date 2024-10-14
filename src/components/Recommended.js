import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"


function Recommended()
{
    return(
        <div>
<div className="recommended">
<h1 className="recommended__title"> Recommended for you</h1>
<p> Pick the best fit</p>
<div className="recommendedcontainer">

    <div className="courses__card">
        <img src={c1}></img>
        <h3>2023 Python Masterclass</h3>
        <p>Col steel</p>
        <p>5.0⭐⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>

    <div className="courses__card">
        <img src={c2}></img>
        <h3>Ethical Hacking</h3>
        <p>John mathew</p>
        <p>3.0⭐⭐⭐</p>
        <p>699 <del>1699</del></p>
    </div>

    <div className="courses__card">
        <img src={c3}></img>
        <h3>Gen AI learning</h3>
        <p>Antony Joseph</p>
        <p>2.0⭐⭐</p>
        <p>599 <del>1599</del></p>
    </div>

    <div className="courses__card">
        <img src={c4}></img>
        <h3>Java Developer</h3>
        <p>Col steel</p>
        <p>5.0 ⭐⭐⭐⭐⭐</p>
        <p>299 <del>999</del></p>
    </div>
</div>
</div>

<div className="topics">
<h1 className="topics__title">Topics recommended for you</h1>
<div className="topics__container">
<p>Website</p>
<p>Javascript</p>
<p>CSS</p>
<p>Mongo DB</p>
<p>Azure</p>
<p>Docker</p>
<p>Github</p>
<p>Java</p>
<p>React JS</p>
</div>
</div>
</div>
)
}
export default Recommended