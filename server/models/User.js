const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email : {type : String, required: true, unique: true},
    name: { type: String, default: 'First Name, Second Name' },
    phone: { type: String, default: '+380 XX XXX XX XX' },
    rules: { type: Number, default: 0 },
    password : {type : String, required: true},
})

module.exports = model('User', schema)