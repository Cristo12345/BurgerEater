var connection = require("../config/connection");

var orm = {
    // orm function to select all burgers from table
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // orm function to insert a burger into the table with default
    // "devoured" value of false

    // i know I'm not taking full advantage of the orm by hard coding 
    // the column names here, was having trouble making it as
    // generic as possible
    insertOne: function (tableInput, val, cb) {
        var queryString = "INSERT INTO " + tableInput;
        queryString += " (burger_name, devoured) VALUES (" + val + ", false);";

        console.log(queryString);

        connection.query(queryString, val, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    // orm function to update a burger already in the table with id
    updateOne: function (tableInput, objColVals, condition, cb) {
        var queryString = "UPDATE " + tableInput;
        queryString += " SET devoured WHERE " + condition;
        console.log(queryString);

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;