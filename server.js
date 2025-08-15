const express = require("express");
const mongoose = require("mongoose");
const User = require("./model/schema");

const app = express();
app.use(express.json());

// Create user
app.post("/users", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

// Read all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update user
app.put("/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "User Updated" });
});

// Delete user
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
});

// Connect to MongoDB and start server
mongoose.connect("mongodb+srv://polamonisrikanth123:Srikanth%40214@consulto.u3nkebj.mongodb.net/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ MongoDB Connected");
  app.listen(3000, () => console.log("🚀 http://localhost:3000"));
})
.catch(err => console.error(err));


