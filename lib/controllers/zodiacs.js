const { Router } = require('express');
const { zodiacs } = require('../../data/zodiacs');

const router = Router();

module.exports = router
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const zodiac = zodiacs.find((zodiac) => zodiac.id === id);
    res.json(zodiac);
  })
  .get('/', (req, res) => {
    const listOfZodiacs = zodiacs.map((zodiac) => {
      return {
        id: zodiac.id,
        name: zodiac.name,
      };
    });
    res.json(listOfZodiacs);
  });
