const { Router } = require('express');
// const { cats } = require('../../data/cats');
const Cat = require('../models/CartoonCat');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const matchingCat = await Cat.getById(id);
    res.json(matchingCat);

    // const id = req.params.id;
    // const matchingCat = cats.find((cat) => cat.id === id);
    // res.json(matchingCat);
  })

  .get('/', async (req, res) => {
    const match = await Cat.getAll();
    const cats = match.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    res.json(cats);
  });
