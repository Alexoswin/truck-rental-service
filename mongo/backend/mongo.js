const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("mongodb connected")

})
.catch(()=>{
    console.log('failed')
})

const newSchema= new mongoose.Schema({
   
    email:{
        type:String,
        require:true
        
    },
    password:{
        type:String,
        require:true
        
    },
    name:{
        type:String,
        require:true
        
    }
    })

    const collection = mongoose.model("collection", newSchema)
    module.exports=collection