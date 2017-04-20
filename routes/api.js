var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Team = mongoose.model('Team');
var Boy = mongoose.model('Boy');

router.route('/boys/top_boys')

	//to get all teams with full data
	.get(function(req, res){

		Boy.find().limit(3).sort({"score":-1}).exec(function (err,boys){
			if(err){
				return res.send(500,err);
			}
            console.log(boys);
			return res.send(boys);
		});
})

router.route('/boys/:user_name')
    .get(function(req, res){
        Boy.find({user_name:req.params.user_name}).exec(function(err, boy){
            if(err)
                res.send(err);
            res.json(boy);
        });
    })

module.exports = router;
