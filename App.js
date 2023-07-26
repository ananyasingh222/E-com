import {useState} from 'react'
import Home from "./Views/Home"
import Navbar from './Layout/Navbar'
import Routing1 from './Routing/Routes1'




function App(){

      return (
        <>
        { localStorage.getItem('uid') != 'undefined' && localStorage.getItem('uid') !== null && localStorage.getItem('uid')!= ""?
        <Navbar/> : null }
        <Routing1/>
        </>

      )




}




export default App;
