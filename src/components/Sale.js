import Saleimg from "../assets/images/Sale4.jpg"

function Sale(){
    return(
<div className="sale">
<img src={Saleimg} alt="img"></img>
<div className="off">
    <h1> Udemy Flash Sale!</h1>
    <p> Get the top courses for just Rs.599!</p>
    <p> Just one day to save Life ttime to learn!!!</p>
</div>
</div>
)
}
export default Sale