
import "./App.css";
const Singin = ()=>{
return(
    <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<div className="top">
<h3 className="singin">Singin</h3>
</div>
<div className="inputred">
    <div className="input_div">
        <div   className="hazma">
    <i class="fa-regular fa-circle-user"></i>   <input   type="text" placeholder="User Name"/>
    <br />
  <br />
  <i class="fa-solid fa-lock"></i> <input type="Password" placeholder="Password" />
    <br />
    <br /> 
    <i class="fa-solid fa-envelope"></i><input type="text" placeholder="Enter Your Email" required/>
    <br />
    <br />
    </div>
    <button className="button_">Login</button>
</div>
</div>
    </div>
)






}

export {Singin}









