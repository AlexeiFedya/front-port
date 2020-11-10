const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true},
    name: {type: String, required: true},
    mess: {type: String, required: true},
    date: { type: Date, default: Date.now },
    links: [{ type: Types.ObjectId, ref: 'Link' }]
})

module.exports = model('User', schema)