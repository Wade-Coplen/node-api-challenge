const express = require('express');
const Actions = require('./actionModel');

const router = express.Router();

router.get('/', (req, res) => {
    const {id} = req.params;
  Actions.get()
  .then(item => {
      res.status(200).json(item);
  })
  .catch(err => {
      res.status(500).json({message: "null"})
  })
})

module.exports = router;