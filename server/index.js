const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./Models/Users.model.js");

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  try {
    // await mongoose.connect(`mongodb://127.0.0.1:27017/Project`);
    const response = await mongoose.connect(
      `mongodb+srv://chitvan201049cst:Chitvan123@cluster0.leijrub.mongodb.net/Project`
      // `${process.env.MONGODB_URI}/Project`
      // console.log(response);
    );
  } catch (error) {
    console.log(`Error occured in connecting the DB, ${error}`);
  }
})();

//! Getting data to home route
app.get("/", async (req, res) => {
  await User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//! Find user
app.get("/getUser/:id", async (req, res) => {
  const id = req.params.id;
  await User.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//! Update User
app.put("/updateUser/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, stream: req.body.stream }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//! Delete user
app.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

//! Create User Api
app.post("/createUser", async (req, res) => {
  await User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});
