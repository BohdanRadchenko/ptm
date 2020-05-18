const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Board = require('../models/Board')
const List = require('../models/List')
const router = Router()

// /api/v1/lists GET
router.get('/:id', auth, async (req, res) => {
  try {
    console.log('GET LIST')
    const boardId = req.params.id
    const userId = req.user.decoded.userId
    await Board.findById(boardId).exec(async (err, board) => {
      if (err) return new Error(err)
      const list = await List.findById(board.list)
      const data = {board, list}
      return res.status(200)
          .json({message: `GET boards Success`, data})
    })
  } catch (e) {
    res.status(500).json(
        {message: `ERROR: GET all Lists. Something went wrong! ${e.message}`})
  }
})

// /api/v1/lists PATCH
router.patch('/', async (req, res) => {
  try {
    const {lists, boardId} = req.body
    console.log('lists', lists)
    console.log('boardId', boardId)
    await List.findOneAndUpdate(
        {_id: lists._id},
        {$set: {lists: lists.lists}},
        {new: true},
        async (err, list) => {
          if (err) return new Error(err)
          const board = await Board.findById(boardId)
          const data = {board, list}
          console.log('data', data)
          return res.json({message: `Lists update Success`, data})
        })
  } catch (e) {
    res.status(500)
        .json({message: `error patch boards by id ${e.message}`})
  }
})

// /api/v1/lists/access  POST add new access user
router.post('/access', auth, async (req, res) => {
  try {
    console.log('POST ADD NEW ACCESS USER')
    // const userId = req.user.decoded.userId
    const {boardId, access} = req.body
    await Board.findOneAndUpdate(
        {_id: boardId},
        {$set: {access: access}},
        {new: true},
        async (err, board) => {
          if (err) return new Error(err)
          const list = await List.findById(board.list)
          const data = {board, list}
          console.log('data', data)
          return res.json({message: `New User access at board`, data})
        })
  } catch (e) {
    res.status(500)
        .json(
            {message: `ERROR: Post create new Board. Something went wrong! ${e.message}`})
  }
})

module.exports = router;