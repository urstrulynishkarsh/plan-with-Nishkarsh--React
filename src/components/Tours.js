import React from 'react'
import Cards from './Cards'
import { FcNightPortrait } from 'react-icons/fc';

function Tours({tours,clickRemoveHandler}) {

   
  return (
    <div className='container'>
       
        <div className='relative'>
        
            <h2 className='title'>Plan With Nishkarsh </h2>
            {/* <span className='hello'><FcNightPortrait /></span> */}
           
            
        </div>
        <div className='cards'>
            {
                tours.map((tour)=>{
                    return(
                        <Cards key={tour.id} {...tour} clickRemoveHandler={clickRemoveHandler}></Cards>
                    )
                }
                )
            }
            
        </div>
    </div>
  )
}

export default Tours