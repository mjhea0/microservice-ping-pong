const express = require('express');
const rp = require('request-promise');

const router = express.Router();

const cat = process.env.NAME;
const order = ['john', 'paul', 'george', 'ringo'];

/*
helpers
 */

function callNext(cat, num) {
  if (parseInt(num) < 1000) {
    let nextCat = 0;
    if (cat !== 'ringo') nextCat = parseInt(order.indexOf(cat) + 1);
    const options = {
      method: 'POST',
      uri: `http://meow-${order[nextCat]}:3000/meow`,
      json: true,
      headers: { 'Content-Type': 'application/json', },
      body: {
        message: 'meow!',
        round: num,
        next: order[nextCat],
      }
    };
    rp(options)
    .then(() => {})
    .catch((err) => { console.log(err); });
  }
}

/*
routes
 */

// eslint-disable-next-line no-unused-vars
router.get('/ping', (req, res, next) => {
  res.send('pong');
});

// eslint-disable-next-line no-unused-vars
router.get('/start', (req, res, next) => {
  callNext('john', 0);
  res.json('starting!');
});

// eslint-disable-next-line no-unused-vars
router.post('/meow', (req, res, next) => {
  console.log(req.body);
  callNext(req.body.next, parseInt(req.body.round) + 1);
  res.json('meow');
});

module.exports = router;
