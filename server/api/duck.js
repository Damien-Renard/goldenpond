const router = require('express').Router();
const db = require('../../db');

const Duck = db.Duck;

router.get('/fetch/:pondId', (req, res, next) => (
  Duck.findAll({
    where: {
      pondId: req.params.pondId,
    },
  })
  .then((response) => {
    const allDucks = response.map(duck => duck.dataValues);
    res.status(200).json(allDucks);
  })
  .catch(next)
));

router.post('/', (req, res, next) => (
  Duck.create(req.body)
    .then((response) => {
      const newDuck = response.dataValues;
      res.status(201).json(newDuck);
    })
    .catch(next)
));

router.put('/update/:duckId', (req, res, next) => (
  Duck.findById(req.params.duckId)
  .then((duck) => {
    duck.update(req.body)
    .then(updatedDuck => res.status(200).json(updatedDuck));
  })
  .catch(next)
));

router.delete('/reset/:pondId', (req, res, next) => (
  Duck.destroy({
    where: {
      pondId: req.params.pondId,
    },
    truncate: true,
  })
  .then(() => res.sendStatus(204))
  .catch(next)
));

router.delete('/:duckId', (req, res, next) => (
  Duck.destroy({
    where: {
      id: req.params.duckId,
    },
  })
  .then(() => res.sendStatus(204))
  .catch(next)
));

module.exports = router;
