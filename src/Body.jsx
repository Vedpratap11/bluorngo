import React from 'react'
// import { FaRupeeSign } from "react-icons/fa";

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
         {/* <img src={props.data[0].src} alt="" /> */}
         {/* {props.title1 ? (<p>{props.title1}</p>) : ""}  
         {props.price1 ? (<h5>RS.{props.price1}</h5>) : ""}   */}
           {props.data.map((obj)=>{
            return(
              <div className='laprd'>
                           <img src={obj.src} alt="" />
              </div>
            )
           })}
         </div>
    
{/*     
         <div className='prd'>
          {props.img?(<img src={props.img} alt="" />):""}
          {props.title ? (<p>{props.title}</p>) : ""}  
         {props.price ? (<h5>RS.{props.price}</h5>) : ""}  
         </div> */}
        
         </>
    
    
    
  )
}

export default Body
