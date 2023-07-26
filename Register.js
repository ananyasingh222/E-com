
import {useState} from "react"
import axios from 'axios'
import {toast} from 'react-toastify'


function Register(){
    var [values , setValues] = useState({

      name : "",
      email : "",
      mobile : "",
      password : ""



    })


    function handleInputs(e){
        console.log(e.target.name)
        setValues({...values , [e.target.name] :e.target.value })



    }

    const handleSubmit = (e) =>{
        e.preventDefault()
       var m_reg = /^[6-9]\d{9}$/
       var e_reg =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       
       if(values.name == "")
       {
        toast.error("Please Enter Your Name")

       }
       else if(!e_reg.test(values.email))
       {
        toast.error("Please enter a valid email") 

       }
       else if(!m_reg.test(values.mobile))
       {
        toast.error("Please enter a valid mobile") 
       }
       else if(values.password = "")
       {
        toast.error("Please Enter password")
       }
       else 
       {
        axios.post('http://localhost:9091/register' , values).then((res)=>{
        console.log(res)  
        toast.success(res.data.message)

        }).catch((err)=>{
            console.log(err)

            toast.error(err.response.data.message)
        })
       }


    }




    return(
        <div style={{display: "flex" , width : "80%" , margin : 'auto' , justifyContent : "center"}}>
        <form>
  <div class="form-group" >
    <label for="a1">Name</label>
    <input type="email" onChange={handleInputs} name = "name" class="form-control" id="a1"  placeholder="Enter email"/>
   
  </div>
  <div class="form-group" >
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={handleInputs} name = "email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div class="form-group" >
    <label for="exampleInputEmail1">    Mobile</label>
    <input type="text" onChange={handleInputs} name = "mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={handleInputs} name = "password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
   
  <button type="submit" onClick={(e)=>{handleSubmit(e)}} class="btn btn-primary">Submit</button>
</form>
</div>
    )
}

export default Register
