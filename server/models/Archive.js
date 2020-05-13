const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  lists: {type: Array, default: []},
  boards: {type: Array, default: []}
})

module.exports = model('Archive', schema)