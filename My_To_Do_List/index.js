const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/" ,function(req ,res){
    var today = new Date();
    var Current_Day = today.getDay();

    if(Current_Day === 6 || Current_Day === 0){
        res.write("<h1>This is weekend</h1>");
    }
    else{
        res.write("<h1> This is WeekDay </h1>");
    }

});

app.listen(3000 ,function(){
    console.log("server started on port 3000");
});