const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOption = {
    origin:"*",
    credentials:true,
    optionssuccessStatus:200
}
app.use(cors(corsOption))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


//Connection with db
const db = require("./app/models");
db.mongoose.connect(db.url ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connected to the database!")
}).catch(err => {
    console.log("Cannot connect to the database!",err);
    process.exit()
})



//listen the request on port
const PORT = process.env.PORT || 8081
app.listen(PORT , (req,res) => {
    console.log(`Server is running on port ${PORT}`)
})



