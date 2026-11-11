import React from "react";
import { useState } from "react";
const State=()=>{
   const [count,setCount] =useState(0)
   const [toggle,setToggle] =useState(true)
//    count >>>current Value of count
//    setCount >>>function to update the value of count
//    () initial value of count
  


  
    function increamentCount(){
      setCount(count+1);
       
    }
    function decreamentCount(){
        if(count>0){
   setCount(count-1);
        }
     
    }
    function hide(){
setToggle(false);
    }

    function show(){
setToggle(true);
    }


    function handleToggle(){
setToggle(!toggle);

    }
    return(
        <>
        <h1>Use State Tutorial</h1>
        <p>Count: {count}</p>
        <button onClick={increamentCount}>Increament</button>
        <button onClick={decreamentCount}>Decrease</button>



{
    toggle?<p>Use State Hook to manage component state</p>:""
}

<button onClick={hide}>Hide</button>
<button onClick={show}>Show</button>
<button onClick={handleToggle}>Toggle</button>


        </>
    )
}

export default State;

