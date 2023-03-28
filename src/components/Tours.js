import React from 'react'
import Cards from './Cards'

function Tours({tours,clickRemoveHandler}) {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Plan With Nishkarsh</h2>
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