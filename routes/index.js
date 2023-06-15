var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thundercats' });
});

router.get('/masuk', function(req, res, next) {
  res.send('Hello we are thundercats');
});
module.exports = router;
