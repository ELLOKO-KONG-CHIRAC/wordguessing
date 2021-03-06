const express = require('express');
const app = express();
const port = 3003;
const path = require('path')
   
 
app.set("view engine", "pug");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get('/',(req,res,next)=>{
    res.render("home")
})
 
const server = app.listen(port, () => console.log("Server listening on port " + port));

