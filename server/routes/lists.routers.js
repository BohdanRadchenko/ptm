const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Board = require('../models/Board')
const List = require('../models/List')
const router = Router()

// /api/v1/lists
router.get('/:id', auth, async (req, res) => {
  try {
    console.log('GET LIST')
    const boardId = req.params.id
    const userId = req.user.decoded.userId
    await Board.findById(boardId).exec(async (err, board) => {
      if (err) return new Error(err)
      const list = await List.findById(board.list)
      const data = {board, list}
      return res.status(200).json({message: `GET boards Success`, data})
    })
  } catch (e) {
    res.status(500).json({message: `ERROR: GET all Lists. Something went wrong! ${e.message}`})
  }
})

module.exports = router;