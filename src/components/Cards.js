import React, { useState } from 'react'

function Cards({id,image,info,price,name ,clickRemoveHandler}) {
    const[readmore,setreadmore]=useState(false)
    const description=readmore?info:`${info.substring(0,200)}....`
   

  return (
    <div className='card'>
        <img src={image} alt='' className='image' loading='lazy'/>
        <div>
        <div className='tour-info'>
            <h4 className='tour-price'>₹{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
        <div className='description'>
            {description}
            <span className='readmore' onClick={()=>{setreadmore(!readmore)}}>
                {readmore?`Show Less`:`Read More`}
            </span>
        </div>
        </div>
        <button className='button-red' onClick={()=>{clickRemoveHandler(id)}}>
            Not Interested
        </button>
    </div>
  )
}

export default Cards