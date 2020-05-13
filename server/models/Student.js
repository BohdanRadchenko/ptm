const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  name: {type: String, default: 'First Name, Second Name'},
  email: {type: String, default: 'email@email.com'},
  info: {type: String, default: 'Other info'},
  birthday: {type: String, default: '01.01.1900'},
  phone: {type: String, default: '+380 XX XXX XX XX'},
  teacher: {type: Types.ObjectId, ref: "User"},
})

module.exports = model('Student', schema)