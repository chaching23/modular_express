const mongoose = require("mongoose");
// const Shark = mongoose.model("Shark");

module.exports = {
    index: function(req, res) {
        res.render("show_all");
    
    
    }


    app.get('/quotes', function(req, res){
        Quote.find({}, function(err, quotes){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               res.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               res.json({message: "Success", data: quotes})
            }
         })
    })    


















};