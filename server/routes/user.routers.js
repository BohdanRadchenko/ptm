const {Router} = require('express')
const User = require('../models/User')
const router = Router()

// /api/v1/users/:id  GET a Users by Id
router.get('/:id', async (req, res) => {
  try {
    console.log('GET USERS BY ID')
    const userId = req.params.id
    const user = await User.findById(userId)
    console.log('GET USER BY ID SUCCESS')
    res.json({message : 'GET User by id Success', user})
  } catch (e) {
    res.status(500)
        .json({message: `ERROR: GET Users by ID. Something went wrong! ${e.message}`})
  }
})

// /api/v1/users/  GET all Users
router.get('/', async (req, res) => {
  try {
    console.log('GET ALL USERS')
    const users = await User.find()
    console.log('GET USERS SUCCESS')
    res.json({message : 'GET User by id Success', users})
  } catch (e) {
    res.status(500)
        .json({message: `ERROR: GET Users by ID. Something went wrong! ${e.message}`})
  }
})

// /api/v1/users/access  POST a Users access
router.post('/access', async (req, res) => {
  try {
    console.log('POST USERS ACCESS')
    const access = req.body
    const accessUsers = async () => {
      return Promise.all(access.map(async id => await User.findById(id)))
    }
    accessUsers().then(users => {
      console.log('POST USERS ACCESS SUCCESS')
      res.json({message : 'POST Users access Success', users})
    })
  } catch (e) {
    res.status(500)
        .json({message: `ERROR: POST Users access. Something went wrong! ${e.message}`})
  }
})

module.exports = router;