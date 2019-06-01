var express = require('express');
var pambazo = require('../models/pambazo');


var router = express.Router();


router.get("/", function(req, res){
    res.redirect('/pambazos')
})

router.get("/pambazos", function(req, res){
    pambazo.all(function(pambazo){
        res.render('index',{pambazoData:pambazo})
    })
})

router.post("/pambazos/create", function(req, res){
    console.log(req.body.pambazo)
    pambazo.create(req.body.pambazo, function(result){
        console.log(result);
        res.redirect("/")
    })
})

router.put("/pambazos/:id", function(req, res){
    pambazo.update(req.params.id,function(result){
        console.log(result);
        res.sendStatus(200);
    })
})

module.exports = router;
