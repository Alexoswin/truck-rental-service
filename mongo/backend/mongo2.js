const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest')
.then(()=>{
    console.log("mongodb collection 2 connected")

})
.catch(()=>{
    console.log('failed')
})

const newSchema= new mongoose.Schema({
   
    tcost:{
        type:String,
        require:true
        
    },
    tdistance:{
        type:String,
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
    }

    })

    const collectionone = mongoose.model("collectionone", newSchema)
    module.exports=collectionone