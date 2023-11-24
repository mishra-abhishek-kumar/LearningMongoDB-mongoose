const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://temp:BNhlAPn8HiI8RO3p@cluster0.pxqen0f.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log("Successfully connected to MongoDB!");
  } catch(err) {
    console.log(err);
  }
}
run();
