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
// async function createUser(newUser) {
//   const user = new User(newUser); //saving user inside computer memory
//   await user.save(); //saving data in mongoDB
// }

// createUser({email: "random2@gmail.com", password: "5984"});

//Find Users
async function findUser() {
    //finding all users
    // const users = await User.find();

    //finding specific user
    // const user = await User.findById('6560445d9bbd51b726f7f782');

    //find user by fields
    // const user = await User.find({email: 'random1@gmail.com'}) //returns array: finds all the record with same field
    // const user = await User.findOne({email: 'random1@gmail.com'}); //returns the first field found by the field

    //find user using regex
    const user = await User.find({email: {$regex: "1"}}); //finding emails having "1" in them
    console.log(user);
}

findUser();