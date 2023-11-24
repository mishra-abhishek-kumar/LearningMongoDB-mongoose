const mongoose = require("mongoose"); // import mongoose
const User = require('./models/User');

try {
  mongoose.connect(
    "mongodb+srv://temp:PwadZOK8SdmBuox9@cluster0.pxqen0f.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true, // default recommended options
      useUnifiedTopology: true,
    }
  )
  .then(e => console.log("MongoDB ready"))
  .catch(console.error);
} catch (error) {
  console.log(error);
}

//Create new user
async function createUser(newUser) {
  const user = new User(newUser); //saving user inside computer memory
  await user.save(); //saving data in mongoDB
}

createUser({email: "random2@gmail.com", password: "5984"});