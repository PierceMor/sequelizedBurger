var app = require('express');
var router = app.Router();

var burger = require('../models/burger.js');




//Create the router for the app, and export the router at the end of your file.
// This will connect the 


router.get('/', function( req, res){
    burger.selectAll(function(data){
        var hbsObjext = {
            burger: data
        };
        console.log(hbsObjext);
        res.render('index', hbsObjext);

    });
});

router.post("/api/burger",function(req,res ){
    burger.post(req.body.name, function (result){
        res.json({ id:result.insertid });
        console.log(req.body.burger)
    });
});

router.put("/api/burger/:id", function(req, res){
    var condition = 'id = ' + req.params.id;

    console.log('conition', condition);

    burger.put({
        devoured: true
    }, condition, function(res){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }); //.update

});// .put

router.delete("/api/burger/:id", function(req, res){
    var condition = " id = " + req.params.id;

    console.log( "condition", condition);

    burger.deleting( condition, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(202).end();
        }
    } );
});//.delete


module.exports = router;