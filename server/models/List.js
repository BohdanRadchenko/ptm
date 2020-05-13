const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  lists: {type: Array, default: []},
  data: {type: Date, default: Date.now},
  board: { type: Types.ObjectId, ref: "Board" }
})

module.exports = model('List', schema)