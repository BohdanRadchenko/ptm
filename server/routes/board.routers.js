const {Router} = require('express')
const Board = require('../models/Board')
const List = require('../models/List')
const auth = require('../middleware/auth.middleware')
const CreateModel = require('../helpers/createModel.helpers')
const router = Router()

// /api/v1/boards/create
router.post('/create', auth, async (req, res) => {
  try {
    const userId = req.user.decoded.userId
    const day = req.body.startValueDay
    const month = req.body.startValueMonth
    const createList = CreateModel.list(day, month)

    await new List({
      lists: createList.lists,
      dateStart: createList.dateStart,
      dateEnd: createList.dateEnd,
      notification: createList.notification
    }).save( async (err, list) => {
      if(err) return new Error(err)
      const createBoard = CreateModel.board(userId, list)
      await new Board({
        dateStart: createBoard.dateStart,
        dateEnd: createBoard.dateEnd,
        author: createBoard.author,
        list: createBoard.list,
        access : createBoard.access,
      }).save( async (err, board) => {
        if(err) return new Error(err)
        await Board.find().exec((err, boards) => {
          if(err) return new Error(err)
        return res.status(201).json({message: `New board is created`, boards})
        })
      })
    })
  } catch (e) {
    res.status(500)
        .json({message: `ERROR: Post create new Board. Something went wrong! ${e.message}`})
  }
})

// /api/v1/boards/
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.decoded.userId
    console.log(userId)
  } catch (e) {
    res.status(500)
        .json({message: `ERROR: GET all Board. Something went wrong! ${e.message}`})
  }
})

module.exports = router;