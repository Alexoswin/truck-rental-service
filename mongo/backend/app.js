const express = require("express");
const collection = require("./mongo"); // Import your MongoDB collection
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/",cors(), (req, res) => {
  // Define your root route logic here
  res.json("Welcome to the server!");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email: email ,password:password });

    if (check) {
      res.json("exists");
    } else {
      res.json("notexists");

    }
  } catch (e) {
   
    res.json("servererror");
  }
});

app.post("/signup", async (req, res) => {
  const {sname, semail, spassword } = req.body;

  const data = {
    name:sname,
    email: semail,
    password: spassword,
  };
  try {
    const check = await collection.findOne({ email:semail  });

    if (check) {
      res.json("exists");
     
    } else {
      res.json("notexists");
      await collection.insertMany([data]);
    
    }
  } catch (e) {
    
    res.json("server error");
  }
});


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});