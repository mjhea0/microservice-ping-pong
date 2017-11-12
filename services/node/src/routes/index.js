const express = require('express');
const axios = require('axios');

const router = express.Router();

const order = ['paul', 'george', 'ringo'];

/*
routes
 */

// eslint-disable-next-line no-unused-vars
router.get('/ping', (req, res, next) => {
  res.send('pong');
});

// eslint-disable-next-line no-unused-vars
router.get('/start', (req, response, next) => {
  axios.all(order.map(l => axios.get(`http://node-${l}:3000/meow`)))
    .then(axios.spread((...res) => {
      // all requests are now complete
      const t = res.map((k) => {
        return k.data;
      });
      response.json(t);
    }))
    .catch((err) => {
      response.json(err);
    });
});


// eslint-disable-next-line no-unused-vars
router.get('/meow', (req, res, next) => {
  // eslint-disable-next-line dot-notation
  res.json(`meow from ${req.headers['host']}`);
});

module.exports = router;
