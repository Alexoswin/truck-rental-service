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

app.post("/login", async (req, res) => {
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
  const { sname, semail, spassword } = req.body;

  const data = {
    name: sname,
    email: semail,
    password: spassword,
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

// Bookings route
app.post("/bookings", async (req, res) => {
  const { tcost, tdistance, source, destination, address ,date_booked,id} = req.body;

  const details = {
    tcost: tcost,
    tdistance: tdistance,
    source: source,
    destination: destination,
    address: address,
    date_booked: new Date(),
    id:id
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
