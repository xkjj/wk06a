const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", async(req, res)=>{

    let endp = "https://www.cheapshark.com/api/1.0/deals?pageSize=10&AAA=1";

    let response = await fetch(endp);

    let resdata = await response.json();

    //res.send(resdata);

    res.render("deals", {apideals: resdata, moredata: "Top 10 deals"});

});


app.listen(3000, ()=>{
    console.log("Server running on locahost:3000");
});