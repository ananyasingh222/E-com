import {Routes , Route} from  'react-router-dom'
import Home from '../Views/Home'
import Contact from '../Views/Contact'
import  About from '../Views/About'
import Login from '../Views/login'
import Register from '../Views/Register'





function Routing1(){

   
     


    return(
        <>
        { localStorage.getItem('uid') != 'undefined' && localStorage.getItem('uid') !== null && localStorage.getItem('uid')!= ""?


        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<Home/>}/>
        </Routes>
        : <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Login/>}/>
        </Routes>
        }
        </>
    )
    
}


export default Routing1
