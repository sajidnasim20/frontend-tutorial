import aboutUs from "../public/images.jpg"

import {useNavigate} from "react-router-dom";
const Common=(props)=>{
        const navigate =useNavigate();
console.log(props)
    return(
      <div className="container">
<h1>{props.title} Section</h1>
        <div className="row">
<div className="col-md-6">
    <h2>This is a {props.title} Section</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsa expedita ut facere quas dicta delectus magni quam corporis unde? Non impedit dicta sunt rerum quisquam ipsam eos? Modi, commodi.</p>
    <button className="btn btn-primary" onClick={()=>navigate(props.visited)}>Navigate {props.title}</button>
</div>

<div className="col-md">
    <div className="col-md-6">
        <img src={props.img} alt="" />
    </div>
</div>
        </div>
      </div>
    )
}


export default Common;