const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        try {
            const { user } = req.body

            const devExists = await Dev.findOne({ user })
            if(devExists)
                return res.status(200).json(devExists)

            const response = await axios.get(`https://api.github.com/users/${user}`)
            const { name, avatar_url: avatar, bio } = response.data

            const devCreated = await Dev.create({
                name, user, bio, avatar
            })

            return res.status(200).json(devCreated)
        } catch (error) {
            console.log(error)
            return res.send(error)
        }
    },

    async index(req, res) {

        try {
            const { user } = req.headers

            const loggedDev = await Dev.findById(user)


            const users = await Dev.find({
                //Aplica todos os filtros de uma vez
                $and: [
                    //Me traga todos que não sejam esse $not-equal
                    { _id: { $ne: user }},
                    //Me traga todos que não estejam nessa lista, $not-in
                    { _id: { $nin: loggedDev.likes }},
                    { _id: { $nin: loggedDev.dislikes }}
                ]
            })

            return res.json(users)
        } catch (error) {
            console.log(error)
            return false
        }

    }
}