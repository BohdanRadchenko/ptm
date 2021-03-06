const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  dateStart: {type: Date, default: null},
  dateEnd: {type: Date, default: null},
  date: {type: Date, default: Date.now()},
  author: {type: Types.ObjectId, ref: "User"},
  // access: [{type: Types.ObjectId, ref: "User"}],
  access: {type: Array, default : []},
  list: { type: Types.ObjectId, ref: "list" },
})

module.exports = model('Board', schema)