const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://polamonisrikanth123:Srikanth%40214@consulto.u3nkebj.mongodb.net/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model("User", userSchema);

module.exports = User; // for reuse
