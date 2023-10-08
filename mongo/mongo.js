const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 300; 

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+"form.html")); 

// MongoDB connection
mongoose.connect('mongodb+srv://oswin:oswinalex@cluster0.7mnzpn3.mongodb.net/?retryWrites=true&w=majority&dbname=newtest',
 { useNewUrlParser: true, useUnifiedTopology: true });

// Define your schema and model (same as in your code)
const custSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const cust = mongoose.model('cust', custSchema);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/form.html");
});

app.post("/add-customer", async (req, res) => {
    try {
        // Create a customer document from form data
        const customer = new cust({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
            
        });
          
        // Save the customer data to the database
        await customer.save();
        console.log('Saved in the database');
        res.redirect("/"); // Redirect back to the form
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send("Internal Server Error");
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
