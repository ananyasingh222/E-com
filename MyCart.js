import {useEffect, useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'


import './Table.css'

function Home({xValue}){

    var [data , setData] = useState([])


    useEffect(()=>{

    
        axios.get('http://localhost:9091/get-cart' , {params :{cust_id : localStorage.getItem('uid') }}).then((res)=>{
        console.log(res.data)
        setData(res.data.data)

        }).catch((err)=>{
            setData([])
        })

    },[])

    const handleCart = (x) =>{
        console.log(x)
        var data = {cust_id : localStorage.getItem('uid') , p_data : x} 
        axios.post('http://localhost:9091/add-to-cart' , data).then((res)=>{
           toast.success(res.data.message)

        }).catch((err)=>{
            toast.error(err.response.message)
        })
    }



    return (
       <>
       <div className='container'>
         <table>
            <tr>
                <th>SR#</th>
                <th>Product</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
            {data.map((d , i)=>(
                <tr>
                    <td>{i+1}</td>
                    <td>{d.p_data.p_name}</td>
                    <td>{d.p_data.p_price}</td>
                    <td>{d.p_data.p_cat}</td>
                    <td><img src={d.p_data.p_img} width ={200} height = {200}/></td>
                   
                </tr>
            ))}
         </table>
         </div>
       </>
    )
}



export default Home;

