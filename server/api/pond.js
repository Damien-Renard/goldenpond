const router = require('express').Router();
const db = require('../../db');

const Pond = db.Pond;

router.get('/', (req, res, next) => (
  Pond.findAll()
    .then((response) => {
      const allPonds = response.map(pond => pond.dataValues);
      res.status(200).json(allPonds);
    })
    .catch(next)
));

router.get('/:pondId', (req, res, next) => (
  Pond.findById(req.params.pondId)
  .then((response) => {
    const currentPond = response.dataValues;
    res.status(200).json(currentPond);
  })
  .catch(next)
));

router.post('/', (req, res, next) => {
  Pond.create(req.body)
    .then((response) => {
      const newPond = response.dataValues;
      res.status(201).json(newPond);
    })
    .catch(next);
});

router.delete('/:pondId', (req, res, next) => (
  Pond.destroy({
    where: {
      id: req.params.pondId,
    },
  })
  .then(() => res.sendStatus(204))
  .catch(next)
));

module.exports = router;
