const CustomerSchema = require('../Schemas/Customer')
const ProductSchema = require('../Schemas/Products')
const CartSchema = require('../Schemas/Carts')
const bcrypt = require('bcrypt')

exports.getAllCartItems = (req,res) => {

    CartSchema.find({cust_id : req.query.cust_id}).then((result)=>{
        
       // console.log(result)
        
        var p_data = []
       
        if(result.length > 0 ){
            for(let i=0; i < result.length ; i++)
            {
        
              console.log("hello" , result[i].p_id )
              ProductSchema.find({_id : result[i].p_id}).then((pd)=>{
              //console.log(pd)
                  p_data.push(pd[0])


              }).catch((err)=>{
                console.log(err)
              })
           }
           console.log(p_data)
           res.status(200).send({status : 200 , data : p_data});
        }
        else {
            res.status(200).send({status : 200 , data : []});
        }

    }).catch((err)=>{
       
        res.status(500).send({status : 200 , message : "Something Went Wrong"});
    })


}


exports.getAllProducts = (req,res) =>{
    ProductSchema.find({}).then((result)=>{
       
        if(result.length > 0)
        {
            res.status(200).send({status : 200 , data : result });
        }
        else {
            res.status(200).send({status : 200 , data : []});
        }


    }).catch((err)=>{
       
        res.status(500).send({status : 200 , message : "Something Went Wrong"});
    })
}




exports.addToCart = (req,res) =>{

const {cust_id , p_data} = req.body;

CartSchema.insertMany({cust_id : cust_id ,p_data : p_data }).then((result)=>{
    if(result.length > 0)
    {
        res.status(200).send({status : 200 , message : "Product added into cart Successfully"});
    }
    else
    {
        res.status(400).send({status : 200 , message : "Something Went Wrong "});
    }
    
   }).catch((err=>{

    res.status(500).send({status : 200 , message : "Something Went Wrong"});
   }))




}





exports.AddProduct = (req,res) =>{

   const {p_name , p_price, p_cat , p_img} = req.body;


   ProductSchema.insertMany({p_name : p_name , p_price : p_price , p_cat : p_cat , p_img : p_img}).then((result)=>{
    if(result.length > 0)
    {
        res.status(200).send({status : 200 , message : "Product added Successfully"});
    }
    else
    {
        res.status(400).send({status : 200 , message : "Something Went Wrong "});
    }
    
   }).catch((err=>{

    res.status(500).send({status : 200 , message : "Something Went Wrong"});
   }))

      




}








exports.checkOddEven = (req,res) =>{

    console.log(req.query)
    if(req.query.number % 2 == 0)
    {
        res.send(`<h1>${req.query.number} is Even Number</h1>`)
    }
    else
    {
        res.send(`<h1>${req.query.number} is Odd Number</h1>`)
    }

}



exports.login = (req,res)=>{
    const {email , password} = req.body;

    CustomerSchema.find({email : email}).then((result)=>{
        console.log(result)
        if(result.length == 0)
        {
            res.status(400).send({status : 400 , message : "User Not Registered"})
        }
        else 
        {
            bcrypt.compare(password , result[0].password , function(err , status){
                if(err)
                {
                    res.status(500).send({status : 500 , message : "Something went wrong"})
                }
                else {
                    if(status == false)
                    {
                        res.status(400).send({status : 400 , message : "Incorrect password"})

                    }
                    else{
                        res.status(200).send({status : 200 , message : "Login Successfully" , data : result[0]})
                    }
                }
            })
        }


    })
}


exports.Register = (req,res)=>{

    const  {name, email , mobile , password} = req.body;

    bcrypt.genSalt(10, function(err , salt){
        if(err)
        {
            res.status(500).send({status : 500 , message : "Something Went Wrong "});   
        }
        else {
            bcrypt.hash(password , salt , function(err, hash){
              if(err)  
              {
                res.status(500).send({status : 500 , message : "Something Went Wrong "});
              }
              else{

                CustomerSchema.insertMany({name : name , email : email , mobile : mobile , password : hash }).then((result) =>{
                    console.log(result)
                    if(result.length > 0)
                    {
                        res.status(200).send({status : 200 , message : "User Registered Successfully"});
                    }
                    else
                    {
                        res.status(400).send({status : 200 , message : "Something Went Wrong "});
                    }
                    
            
                }).catch((err)=>{
                    console.log(err)
                    res.status(500).send({status : 200 , message : "Something Went Wrong"});
                })

              }
            })
        }
    })
        


    


   


}




