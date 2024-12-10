import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App.jsx"
import Newin from "./Newin.jsx"
import Apparel from "./Apparel.jsx"
import Store from "./Store.jsx"
import Search from "./Search.jsx"
import Cart from "./Cart.jsx"
import Header from "./Header.jsx"

function Rout() {
  return (

      <>
      <BrowserRouter>
      <Header />
         <Routes>
            <Route path='/' element={<App/>}></Route>
            <Route path='/Newin' element={<Newin/>}></Route>
            <Route path='/Apparel' element={<Apparel/>}></Route>
            <Route path='/Store' element={<Store/>}></Route>
            <Route path='/Search' element={<Search/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            {/* <Route path='' element={}></Route> */}
            
         </Routes>
      </BrowserRouter>
      </>
    
  )
}

export default Rout
