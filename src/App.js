import React, { useState } from "react";
import Tours from "./components/Tours"
import data from "./data";


const App = () => {
const[tours,settours]=useState(data)
  function clickRemoveHandler(id){
    const newTours=tours.filter(tour => tour.id!==id);
    settours(newTours);
    // toast.success('Your Plan removed')
    // <ToastContainer/>

  }
  // clickRefreshHandler
  if(tours.length===0)
    {
      return(
        <div className="refresh">
           <h2>No Plans Left</h2>
           <button className="btn-pink" onClick={()=>{settours(data)}}>
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
