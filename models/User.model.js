import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Service Provider', 'Client'],
    required: true
  },
  contactInformation: {
    phone: String,
    address: String
  }
})

const User = mongoose.model('User', userSchema)

export default User
// Attributes: Include fields like UserID, Name, Email, Password, Role (Service Provider/Client), Contact Information.
