import React from 'react'
import { FaRupeeSign } from "react-icons/fa";

// import Images from './Components/Images'

function Body(props) {
  //  const a=props.img1
  //  const b=props.img
  //  const c=props.title1
  //  const d=props.title
  //  const e=props.price1
  //  const f=props.price
  //   const g=[a,c,e];
  //  const h=[b,d,f]

    
  return (
    <>
    
    <div className='latestprd'>

      {props.img1? ( <img src={props.img1} alt="" />):""}
         {props.title1 ? (<p>{props.title1}</p>) : ""}  
         {props.price1 ? (<p><FaRupeeSign />{props.price1}</p>) : ""}  
           
         </div>
    
    
         <div className='prd'>
          {props.img?(<img src={props.img} alt="" />):""}
          {props.title ? (<p>{props.title}</p>) : ""}  
         {props.price ? (<p><FaRupeeSign />{props.price}</p>) : ""}  
         </div>
        
         </>
    
    
    
  )
}

export default Body
