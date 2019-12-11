const express = require('express')

const routes = express.Router()
const DevController = require('../controllers/DevController')
const LikeController = require('../controllers/LikeController')
const DislikeController = require('../controllers/DislikeController')

routes.get('/', (req, res) => {
    const { nome } = req.query
    return res.send(`Hello ${nome}`)
})

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.post('/devs/:devID/likes', LikeController.store)
routes.post('/devs/:devID/dislikes', DislikeController.store)

module.exports = routes