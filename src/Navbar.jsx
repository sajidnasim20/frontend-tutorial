
import {useNavigate} from "react-router-dom";
function Navbar(){
    const navigate =useNavigate();

    function handleHomeClick(){
        navigate("/home");
    }
function handleAboutClick(){
navigate("/about");

}
    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="javascript:void(0)">React Tutorial</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)" onClick={handleHomeClick}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)" onClick={handleAboutClick}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)" onClick={()=>navigate("/properties")}>Properties</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)" onClick={()=>navigate("/contact")}>Contact</a>
        </li> 
         <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)" onClick={()=>navigate("/usestate")}>UseState</a>
        </li> 
      </ul>
     
    </div>
  </div>
</nav>
    )
}


export default Navbar