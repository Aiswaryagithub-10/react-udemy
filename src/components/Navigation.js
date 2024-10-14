function Navigation(){
    return(
<div className="nb">
<div className="nb__one">
    <h1 className="nb1-title"> Udemy</h1>
</div>
<div className="nb__two">
    <i className="fa-solid fa-magnifying-glass" style={{color:"#020303"}}></i>
    <input placeholder="Search  for anything here, Tech, Bussiness, Art....."></input>
</div>
<div className="unwanted">
<div className="nb__three">
    <h2> Courses</h2>
    <div className="mylearn">
    <h2> My learning</h2>

    <div className="mylearn__emp">
        <p>Oop's your cart is is empty !!!</p>
    </div>
    </div>
</div>
<div className="icon">
    <i className="fa-solid fa-cart-shopping" style={{color:"#f60b0b"}}></i>
    
    <i className="fa-solid fa-bell" style={{color: "111212"}}></i>
    <i className="fa-solid fa-user" style={{color: "111212"}}></i>
   </div>
   </div>
    <div className="nb__four">
        <i className="fa-solid fa-bars"></i>
    </div>
</div>
)
}
export default Navigation