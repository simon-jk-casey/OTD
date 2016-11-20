var express = require('express');
var router = express.Router();

var otdDb = require('../dbFunctions/otd')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OTD' });
});

/* GET squad list */
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

/* GET player page by ID (by clicking link in squad list)*/
router.get('/squad/:id', function(req, res, next){
  otdDb.getPlayerData(req.params.id)
    .then(function(data){
      console.log("stats", data)
      res.render('player_page', data[0])
    })
    .catch(function(err){
      res.status(500)
    })
})

/* GET fixture list */
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

/* GET fixture by ID (by clicking link in fixture list)*/
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

router.get('/addFixture', function (req, res, next){
  otdDb.getOpposition()
  .then(function(opposition){
    console.log(opposition)
    res.render('fixture_entry', {opposition})
  })
  .catch(function(err){
    res.status(500)
  })
})

router.get('/addResult', function (req, res, next) {
  otdDb.getFixtures()
  .then(function(fixtures){
    console.log(fixtures)
    res.render('result_input', {fixtures})
  })
  .catch(function(err){
    console.log(err);
    res.status(500)
  })
})




/* GET PAGE // POST FORM
RESULT ENTRY, forced path >> bat input >> bowl input >> field input >> resukt input //OPTION TO UPLOAD IMAGE OF SCORESHEET? */





module.exports = router;
