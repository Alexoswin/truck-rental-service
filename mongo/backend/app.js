const express = require("express");
const collection = require("./mongo"); // Import your MongoDB collection
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  // Define your root route logic here
  res.status(200).json("Welcome to the server!");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email: email ,password:password });

    if (check) {
      res.status(200).json("exists");
    } else {
      res.status(404).json("notexists");

    }
  } catch (e) {
    console.error(e);
    res.status(500).json("servererror");
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
      res.status(200).json("exists");
    } else {
      await collection.insertMany([data]);
      res.status(201).json("registered");
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("servererror");
  }
});


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
