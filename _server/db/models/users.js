const db = require('mongoose')
const Schema = db.Schema

const UserSchema = new Schema({
  first : { type: String },
  last: { type: String },
  email: { type: String, unique: true },
  password: { type:String },
},
  {
    timestamps: { createdAt: 'created_on', updatedAt: 'modified_on' }
  })

const Users = db.model('Users', UserSchema)

module.exports = Users
