const express = require("express");
const login = require("./mongo");
const orderdetails = require("./mongo2"); // Import your MongoDB collection
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  // Define your root route logic here
  res.json("Welcome to the server!");
});

app.post("/login",  async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await login.findOne({ email, password });

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
  const { sname, semail, spassword ,date} = req.body;

  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!emailRegex.test(semail)) {
    return res.json("invalidemail");
  }

  if (!/^[a-zA-Z0-9\s]*$/.test(sname) || sname.trim().length === 0) {
    return res.json("invalidname");
  }
  
  
  if (spassword.length < 5) {
    return res.json("invalidpassword");
  }
  

  const data = {
    name: sname,
    email: semail,
    password: spassword,
    data: new Date()
  };
  try {
    const check = await login.findOne({ email: semail });

    if (check) {
      res.json("exists");
    } else {
      await login.insertMany([data]);
      res.json("notexists");
    }
  } catch (e) {
    res.json("server error");
  }
});

/// Bookings route
app.post("/bookings", async (req, res) => {
  const {emailb, tcost, tdistance, source, destination, address ,date_booked,id} = req.body;

  const details = {
    tcost: tcost,
    tdistance: tdistance,
    source: source,
    destination: destination,
    address: address,
    date_booked: new Date(),
    id:id,
    emailb:emailb
  };
  try {
    await orderdetails.insertMany([details]);
    res.json("done");
  } catch (e) {
    res.json("server error");
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});