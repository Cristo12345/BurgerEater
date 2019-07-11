var orm = require("../config/orm");

// creating burger object
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers",function(res) {
            cb(res);
        });
    },

    insertOne: function(val, cb) {
        orm.insertOne("burgers", val, function(res) {
            cb(res);
        });
    }, 

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;