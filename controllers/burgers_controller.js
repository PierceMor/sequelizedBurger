var app = require('express');

var router = app.Router();

var burger = require('../models/burger');


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

// router.create("/api/burgers", function(req, res){
//     burger.create([
//         "name", "devoured"
//     ], [
//         req.body.name, req.body.devoured
//     ], function(result){
//         res.json({ id: result.insertId});
//     });
// });

// // if i want to add some sort of updater functions......
// // router.put("/api/burgers/:id", function(req, res){
// //     var condition = 'id = ' + req.params.id;

// //     console.log('conition', condition);

// //     burger.update({
// //         devoured: req.body.devoured
// //     }, condition, function(result){
// //         if (result.changedRows == 0){
// //             return res.status(404).end();
// //         } else {
// //             res.status(200).end();
// //         }
// //     }) //.update
// // })// .put

// router.delete("/api/cats/:id", function(req, res){
//     var condition = " id = " + req.params.id;

//     console.log( "condition", condition);

//     burger.delete( condition, function(result){
//         if (result.changedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(202).end();
//         }
//     } )
// })//.delete


module.exports = router;