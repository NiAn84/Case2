var express = require('express');
var router = express.Router();
var da = require('../data_access/da');

router.post('/', function(req, res){
    da.search(req.body['search'], function(err, users){
        var userid = req.session['userid'];
        res.render('users/users', {title:'Carparts listing', user_list: users, userid: userid});

    });
});

router.post('/carpart', function(req, res){
    da.searchpart(req.body['search'], function(err, carparts){
        var userid = req.session['userid'];
        res.render('carparts/carparts', {title:'Carparts listing', carpart_list: carparts, userid: userid});
    });
});

module.exports = router;