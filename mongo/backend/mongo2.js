const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("mongodb collection order details connected")

})
.catch(()=>{
    console.log('failed')
})

const newSchema= new mongoose.Schema({
   
    tcost:{
        type:Number,
        require:true
        
    },
    tdistance:{
        type:Number,
        require:true
        
    },
    source:{
        type:String,
        require:true
        
    },
    destination:{
        type:String,
        require:true
        
    },
    address:{
        type:String,
        require:true
        
    },
    date_booked:{
        type:String,
        require:true
    },
    id:{
        type:Number,
        require:true
    }

    })

    const orderdetails = mongoose.model("orderdetails", newSchema)
    module.exports=orderdetails