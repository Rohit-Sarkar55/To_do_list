const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const date = require(__dirname + "/date.js");
//console.log(date);
const app = express();
//console.log(date());

app.set("view engine", "ejs" );
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

var tasks= ["Hit the Gym .. Burn Some Calories" , "Eat Some Food" , "Start Coding.."];

app.get("/" ,function(req ,res){
    
    //console.log(day);

    var day = date.getDate();
    //console.log(day);
    res.render("list" , {NameOfDay: day , ntask : tasks});
    /*
    if(Current_Day === 6 || Current_Day === 0){
      // day ="Weekend";
        res.render("list", {KindOfDay:day});
    }
    else{
       //day = "WeekDay";
       res.render("list", {KindOfDay:day});
    }
    */

});

app.get("/about" , function(req ,res){
    res.render("about" );
});


app.post("/" , function(req , res){
    var task = req.body.newitem;
    tasks.push(task);
    //console.log(task);
    res.redirect("/"  );
    
});

app.listen(3000 ,function(){
    console.log("server started on port 3000");
});