const connectToDB = require("./config/db");
const express = require("express");

connectToDB();
const app = express();
const port = 5004;

app.use(express.json());

app.use('/api/auth' , require('./Route/auth'))
//app.use('/api/notes' , require('./Route/noteRoutes'))

app.listen(port , ()=>{
    console.log(`our app is listning port at http://localhost:${port}`);
})