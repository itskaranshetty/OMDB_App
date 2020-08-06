var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Option 1: Next MiddleWare
  next();
  //Option 2: Do something here only
  //res.send('Express is the best,isn\'t it?');
});


router.get('/', function(req, res, next) {
  //Option 1: Next MiddleWare

  //Option 2: Do something here only
  res.send('This is the next,isn\'t it?');
});

const OMDB_API_KEY = 'ed803d7d';
const OMDB_URL = "http://www.omdbapi.com/"; 


/* IMDB Search */
router.get('/search', (req, res, next) => {
  const title = req.query.title
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&s=${title}`
  axios.get(url)  // Could take a long time
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {  // When error
      res.send(err)
    })
});

/* Single IMDB Movie */
router.get('/imdb/:imdbId', (req, res, next) => {
  const imdbId = req.params.imdbId
  const url = `${OMDB_URL}?apikey=${OMDB_API_KEY}&i=${imdbId}`
  axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = router;
