
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Properties from "./Properties";
import State from "./Hooks/State";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Service from "./Serive";
import Gallery from "./Gallery";
function App() {
    let name = "React Tutorial";
    let duration = "5 Months";
    return (
        <>
            {/* 
        <h1 style={{ color: 'blue' ,backgroundColor: 'red'}}>This is App Compoenets {2+2} </h1>
        <h1>Hello </h1>
       
        <About /> */}
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home></Home>} ></Route>
                    <Route path="/about" element={<About></About>} ></Route>
                    <Route path="/contact" element={<Contact></Contact>} ></Route>
                    <Route path="/properties" element={<Properties data={name} duration={duration} />} ></Route>
                    <Route path="/usestate" element={<State></State>} ></Route>
                    <Route path="/service" element={<Service />} ></Route>
                    <Route path="/gallery" element={<Gallery />} ></Route>

                </Routes>
            </BrowserRouter>
        </>


    )
}


export default App;


//Home > App > main >index.html



