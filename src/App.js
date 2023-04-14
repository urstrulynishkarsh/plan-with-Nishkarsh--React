import React, { useState } from "react";
import Tours from "./components/Tours"
import data from "./data";
import { toast } from "react-toastify";

const App = () => {
const[tours,settours]=useState(data)
  function clickRemoveHandler(id){
    const newTours=tours.filter(tour => tour.id!==id);
    settours(newTours);
    toast.success("removed Successfully")
    

  }
  function tourHandler(){
    settours(data);

    setTimeout(() => {
      toast.success("Welcome back to the tour")
    }, 0);
  }
  
  // clickRefreshHandler
  if(tours.length===0)
    {
      setTimeout(() => {
        toast.warning("Oops all removed")
      }, 2000);
      
      return(
        <div className="refresh">
           <h2>No Plans Left</h2>
           <button className="btn-pink" onClick={tourHandler} >
            Refresh
           </button>
          
        </div>
        
      )
      
      
    }
  return(
    

   <div className="app">
      {/* <h2>Plan with Nishkarsh</h2> */}
      <Tours tours={tours} clickRemoveHandler={clickRemoveHandler}/>
    
    </div>
   )
};

export default App;
