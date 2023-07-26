
import {useNavigate} from 'react-router-dom'

function Navbar(){

  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.removeItem('uid')
    
  }
   

     return(

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick={()=>{navigate('/home')}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{navigate('/about')}}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={()=>{navigate('/contact')}}>Contact</a>
        </li>
        
        </ul>
        
  <form class="form-inline">
    
    <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} type="submit">Logout</button>
  </form>

  <form class="form-inline">
    
    <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleLogout} type="submit">My Cart()</button>
  </form>

        </div>
        </div>
        </nav>

        
     )


}

export default Navbar;
