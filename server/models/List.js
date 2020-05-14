const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  lists: {type: Array, default: []},
  notification: {type: Array, default: []},
  dateStart: {type: Date, default: null},
  dateEnd: {type: Date, default: null},
  data: {type: Date, default: Date.now()},
  board: { type: Types.ObjectId, ref: "Board" }  //???
})

module.exports = model('List', schema)