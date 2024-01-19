import mongoose from 'mongoose'

// Attributes: Include fields like MessageID, SenderID (FK to User), ReceiverID (FK to User), Content, Timestamp.

const messageSchema = new mongoose.Schema({

  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000

  }
}, {
  timestamps: true
})

const Message = mongoose.model('Message', messageSchema)

export default Message
