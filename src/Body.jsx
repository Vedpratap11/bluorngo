import React from 'react'
import { FaRupeeSign } from "react-icons/fa";

// import Images from './Components/Images'

function Body(props) {
   const a=props.img1
   const b=props.img
   const c=props.title1
   const d=props.title
   const e=props.price1
   const f=props.price
    const g=[a,c,e];
   const h=[b,d,f]

    
  return (
    
    {if(g){ return(
    <div className='latestprd'>
        <img src={g.a} alt="" />
           <p>{g.c}</p>
           <p><FaRupeeSign />{g.e}</p>
         </div>)}
    
    // else return(
    //      <div className='prd'>
    //       <img src={h.b} alt="" />
    //        <p>{h.d}</p>
    //        <p><FaRupeeSign />{h.f}</p>
    //      </div>)
        }
         
    
    
    
  )
}

export default Body
