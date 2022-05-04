const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs" );

app.get("/" ,function(req ,res){
    var today = new Date();
    var Current_Day = today.getDay();
    var day ="";
    switch (Current_Day) {
        case 0:
            day = "Sunday"
            break;
        case 1:
            day = "Monday"
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;

        default:
            console.log("Error Current Day is " + Current_Day );
        }

    res.render("list" , {NameOfDay:day});
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

app.listen(3000 ,function(){
    console.log("server started on port 3000");
});