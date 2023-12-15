const express = require("express");
const app = express();
const cors=require("cors");
const mongoose=require("mongoose");
try{
  mongoose.connect('mongodb://localhost:27017/mydb',
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
}
catch{console.log("Error encountered whle connecting to DB");}






const userSchema=new mongoose.Schema({
  firstname : String,
  lastname : String,
  uname : String,
  pass : String
})

const CollectionHandle=mongoose.model("users",userSchema)

app.use(cors());

app.use(express.json());

app.post("/register", async (req, res) => {
  const { fname, lname, username, password } = req.body;

  try {
    // Check if the username already exists in the collection
    console.log("Data received : "+fname+" "+lname+" "+username);
    const existingUser = await CollectionHandle.findOne({ uname: username });

    if (existingUser) {
      res.status(409).send("Username already exists");
    } else {
      // Create a new user if the username is not found
      const newUser = new CollectionHandle({
        firstname: fname,
        lastname: lname,
        uname: username,
        pass: password,
      });

      const saveRes = await newUser.save();

      if (!saveRes) {
        res.status(500).send("Error while saving record");
      } else {
        res.status(200).send("User created");
      }
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Registration failed");
  }
});



app.post("/login", (req, res) => {
  const { sname, pass } = req.body;
  res.status(200);
  res.send(`Hi ${sname}, your password is ${pass}`);
  console.log(
    `Hi ${sname}, your password is ${pass}`,
  );
});



app.listen(8001, () => {/*liten should always be defied after all the routing"*/
  console.log("Server is running on port 3000.");
  
});
