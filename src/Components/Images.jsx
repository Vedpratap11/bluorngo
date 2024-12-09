import React from 'react'
import prd1 from '../assets/prd1.webp'
import prd2 from '../assets/prd2.webp'
import prd3 from '../assets/prd3.jpg'
import prd4 from '../assets/prd4.webp'
import lprd1 from '../assets/lprd1.webp'
import lprd2 from '../assets/lprd2.webp'
import lprd3 from '../assets/lprd3.webp'
import lprd4 from '../assets/lprd4.webp'

import Body from '../Body'


function Images() {
  return (
    <>
    <div className='latest'>
      <Body img1={lprd1} title="YELLOW NOCTURNAL SWEATSHIRT" price="4995"/>
      <Body img1={lprd2} title="BLACK NOCTURNAL HOODIE" price="4995"/>      
      <Body img1={lprd3} title="OLIVE NOCTURNAL HOODIE" price="7495"/>
      <Body img1={lprd4} title="BLACK NOCTURNAL SWEATSHIRT" price="9995"/>
    </div>
    <div className='product'>
      <Body img={prd1} title="BLACK JOGGERS" price="4995"/>
      <Body img={prd2} title="OLIVE JOGGERS" price="4995"/>      
      <Body img={prd3} title="RAW DENIM JORTS" price="7495"/>
      <Body img={prd4} title="CAMO TRACK JACKET" price="9995"/>
    </div>
    </>
  )
}

export default Images