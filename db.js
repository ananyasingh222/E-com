const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Ananya-22' , {useNewUrlParser : true } )
const db = mongoose.connection;



db.on('error' , function(){
console.log("Something Went Wrong During Connection")

})

db.once('open' , function(){
console.log("Successfully connected with MongoDB")
})


module.exports = db;
