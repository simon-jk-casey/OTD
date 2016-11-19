var express = require('express');
var router = express.Router();

var otdDb = require('../dbFunctions/otd')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OTD' });
});

router.get('/squad', function(req, res, next){
  res.status(200)
  otdDb.getSquad()
    .then(function(squadData){
      console.log(squadData);
      res.render('squad', {squadData})
    })
    .catch(function(err){
      res.status(500)
    })
})

router.get('/squad/:id', function(req, res, next){
  otdDb.getBowlingData(req.params.id)
    .then(function(data){
      console.log("stats", data)
      res.render('player_page', data[0])
    })
    .catch(function(err){
      res.status(500)
    })
})

router.get('/fixtures', function(req, res, next){
  res.status(200)
  otdDb.getFixtures()
    .then(function(data){
      console.log(data)
      res.render('fixture_list', {data})
    })
    .catch(function(err){
      res.status(500)
    })
})

router.get('/fixtures/:id', function(req, res, next){
  res.status(200)
  otdDb.getFixture(req.params.id)
    .then(function(data){
      console.log(data)
      res.render('fixture', data[0])
    })
    .catch(function(err){
      res.status(500)
    })
})


/* GET squad list */

/* GET player page by ID (by clicking link in squad list)*/

/* GET fixture list */

/* GET fixture by ID (by clicking link in fixture list)*/

/* GET PAGE // POST FORM
RESULT ENTRY, forced path >> bat input >> bowl input >> field input >> resukt input //OPTION TO UPLOAD IMAGE OF SCORESHEET? */





module.exports = router;
