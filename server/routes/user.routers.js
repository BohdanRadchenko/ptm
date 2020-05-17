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

module.exports = router;