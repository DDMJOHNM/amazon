const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const productRoutes = require("./routes/product")
const categoryRoutes = require("./routes/category")
const ownerRoutes = require("./routes/owner")
//const User = require('./models/user'); 
const Product = require("./models/product");



mongoose.connect(
    `mongodb+srv://root:${process.env.DB_PASS}@amazon-clone.jmqir.mongodb.net/test?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true  }, 
    (err)=>{
        if (err){
            console.log(err);
        } else {
            console.log("Connected to the database");
        }
    }
);


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use("/api",productRoutes)
app.use("/api",categoryRoutes)
app.use("/api",ownerRoutes)

app.listen(3000,err =>{
    if(err){
        console.log(err);
    } else{
        console.log("listening on port 3000");
    }
});


