const { Router } = require('express');
const speakerRouter = Router();
const {Speaker} = require("../model.js");

speakerRouter.get('/', async (req, res) => {
  const speaker = await Speaker.findAll();
  res.json({speakers});
})

speakerRouter.get('/:id', async(req,res)=> {
  const id = req.params.id;
  const speaker = await Speaker.findByPk(id);
  res.json({speaker});
})

speakerRouter.post('/', async (req, res) =>{
  const data = req.body;
  const speaker = await Speaker.create(data);
  res.json({speaker});
})

speakerRouter.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const speaker = await Speaker.findByPk(id);
  await speaker.update(data);
  res.json({speaker})
})

speakerRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const Speaker.findByPk(id);
  await speaker.destroy();
  res.json({speaker});
})

module.exports = speakerRouter;
