var orm = require("../config/orm");

var pambazo = {
    all: function(cb) {
        orm.all("pambazo", function(res) {
            cb(res);
        });
    },
    create: function(name, cb) {
        if (name !== ""){
            orm.create("pambazo", ["pambazo_name", "devoured"], [name, false], cb);
        } else {
            console.log("Error");
        }
    },
    update: function(id, cb) {
        var condition = "id=" + id;
        orm.update("pambazo", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = pambazo;