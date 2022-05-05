const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();


app.set("view engine", "ejs" );
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

var tasks= ["Hit the Gym .. Burn Some Calories" , "Eat Some Food" , "Start Coding.."];

app.get("/" ,function(req ,res){
    var today = new Date();
    var Current_Day = today.getDay();
    var day ="";

    var options = { 
        weekday :"long" , 
        day:"numeric" ,
        month: "long"
    };

    day = today.toLocaleDateString("en-US" , options );
    //console.log(day);

    res.render("list" , {NameOfDay:day , ntask : tasks});
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

app.post("/" , function(req , res){
    var task = req.body.newitem;
    tasks.push(task);
    //console.log(task);
    res.redirect("/"  );
    
});

app.listen(3000 ,function(){
    console.log("server started on port 3000");
});