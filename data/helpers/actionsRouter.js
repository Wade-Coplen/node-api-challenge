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
router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(item => {
        res.status(200).json(item);
    })
    .catch(err => {
        res.status(500).json({message: 'null'})
    })
})
router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(item => {
        if(item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({message: 'The item could not be found'});
        }
    })
    .catch(err => {
        console.log(err => {
            res.status(500).json({message: 'Error udpdating item'})
        })
    })
})
router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(count => {
        if(count > 0) {
            res.status(200).json({ message: 'The item has been nuked' });
        } else {
            res.status(404).json({ message: 'The item could not be found' });
        }
    })
    .catch(err => {
        res.status(500).json({message: 'Error removing the item'})
    })
   
})
module.exports = router;