const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  dateStart: {type: Date, default: null},
  dateEnd: {type: Date, default: null},
  data: {type: Date, default: Date.now},
  author: {type: Types.ObjectId, ref: "User"},
  list: [{ type: Types.ObjectId, ref: "list" }],
})

module.exports = model('Board', schema)