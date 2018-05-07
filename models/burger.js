var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burger', function(res){
            cb(res);
        });
    },
    post: function(cols, vals, cb){
        orm.post('burger', cols,  vals, function(res){
            cb(res);
            console.log("create-model");
        });
    },
    put: function(objColVals, condition, cb){
        orm.put('burger', objColVals, condition, function(res){
            cb(res);
        });
    },
    deleting: function(condition, cb){
        orm.deleting('burger',condition, function(res){
            cb(res);
        });
    }
};
module.exports = burger;