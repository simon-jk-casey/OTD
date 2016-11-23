var express = require('express');
var router = express.Router();

var otdDb = require('../dbFunctions/otd')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OTD' });
});

/* GET squad list */
router.get('/squad', function(req, res, next){
  otdDb.getSquad()
    .then(function(squadData){
      console.log(squadData);
      res.render('squad', {squadData})
    })
    .catch(function(err){
      console.log(err);
    })
})

/* GET player page by ID (by clicking link in squad list)*/
router.get('/squad/:id', function(req, res, next){
  otdDb.getPlayerData(req.params.id)
    .then(function(data){
      otdDb.calcAvg(data)
      res.render('player_page', data[0])
    })
    .catch(function(err){
      console.log(err);
    })
})

/* GET fixture list */
router.get('/fixtures', function(req, res, next){
  otdDb.getFixtures()
    .then(function(data){
      console.log(data)
      res.render('fixture_list', {data})
    })
    .catch(function(err){
      console.log(err);
    })
})

/* GET fixture by ID (by clicking link in fixture list)*/
router.get('/fixtures/:id', function(req, res, next){
  otdDb.getFixture(req.params.id)
    .then(function(data){
      console.log(data)
      res.render('fixture', data[0])
    })
    .catch(function(err){
      console.log(err);
    })
})

router.get('/addFixture', function (req, res, next){
  otdDb.getFixtureEntryData()
  .then(function(data){
    console.log(data)
    res.render('fixture_entry', {data})
  })
  .catch(function(err){
    console.log(err);
  })
})

router.post('/addFixture', (req, res, next) => {
  console.log(req);
})

router.get('/addResult', function (req, res, next) {
  otdDb.getFixtures()
  .then(function(fixtures){
    console.log(fixtures)
    res.render('result_input', {fixtures})
  })
  .catch(function(err){
    console.log(err);
  })
})

router.get('/inputBatting', function (req, res, next){
  otdDb.getSquad()
  .then(function(player){
    console.log(player)
    res.render('bat_input', {player})
  })
  .catch(function(err){
    console.log(err)
  })
})

router.post('/inputBatting', function (req, res, next){
  otdDb.createCard(req)
  .then(function(){
    res.redirect('/')
  })
  .catch(function(err){
    console.log(err);
  })
})

router.get('/inputBowling', function(req, res, next){
  otdDb.getSquad()
  .then(function(player){
    res.render('bowl_input', {player})
  })
  .catch(function(err){
    console.log(err)
  })
})

router.post('/inputBowling', (req, res, next) => {
  otdDb.addBowlingData(req)
  .then(function(){
    res.redirect('/')
  })
  .catch(function(){
    console.log(err);
  })
})

router.get('/inputFielding', function(req, res, next){
  otdDb.getSquad()
  .then(function(player){
    res.render('field_input', {player})
  })
  .catch(function(err){
    console.log(err)
  })
})

router.post('/inputFielding', (req,res,next) => {
  otdDb.addFieldingData(req)
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    console.log(err);
  })
})

router.get('/addPlayer', function (req, res, next){
  res.render('createPlayer')
})

router.post('/addPlayer', function (req, res, next){
  var player = req.body
  console.log(player.firstName);
  otdDb.addPlayer(player)
  .then(function(){
    res.redirect('/squad')
  })
})





/* GET PAGE // POST FORM
RESULT ENTRY, forced path >> bat input >> bowl input >> field input >> resukt input //OPTION TO UPLOAD IMAGE OF SCORESHEET? */





module.exports = router;
