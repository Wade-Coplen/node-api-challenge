const express = require('express');
const Projects = require('./projectModel');

const router = express.Router();
//GET
router.get('/', (req, res) => {
    const {id} = req.params;
  Projects.get()
  .then(item => {
      res.status(200).json(item);
  })
  .catch(err => {
      res.status(500).json({message: "null"})
  })
})
//POST
router.post('/', (req, res) => {
  Projects.insert(req.body)
  .then(item => {
      res.status(200).json(item);
  })
  .catch(err => {
      res.status(500).json({message: "null"})
  })
})
//UPDATE
router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(item => {
        if(item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: 'The item could not be found' });
        }    
    })
    .catch(err => {
        res.status(500).json({message: 'null'})
    })
})
//REMOVE
router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(count => {
        if(count > 0) {
            res.status(200).json({ message: 'The item has been nuked' });
        } else {
            res.status(404).json({ message: 'The item could not be found' });
        }
    })
    .catch(err => {
        console.log(error);
        res.status(500).json({
        message: 'Error removing the hub',
    })
})
})
module.exports = router;