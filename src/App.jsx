
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
    return(
<>
{/* 
        <h1 style={{ color: 'blue' ,backgroundColor: 'red'}}>This is App Compoenets {2+2} </h1>
        <h1>Hello </h1>
       
        <About /> */}



    <BrowserRouter>
    <Navbar />
    <Routes>

        <Route  path="/home" element={ <Home></Home>} ></Route>
        <Route  path="/about" element={ <About></About>} ></Route>
        <Route  path="/contact" element={ <Contact></Contact>} ></Route>
    </Routes>
    </BrowserRouter>
</>


    )
}


export default App;


//Home > App > main >index.html