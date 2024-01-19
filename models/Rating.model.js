// Attributes: Include fields like RatingID,RatingUserId (FK to user rating), RatedUserID (FK to User being rated), RatingValue, ReviewText, anonymous (option to make it anonymous).
import mongoose from 'mongoose'

const ratingSchema = new mongoose.Schema({
  // RatingValue, ReviewText, anonymous
  ratingUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ratedUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  ratingValue: {
    type: Number,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  anonymous: {
    type: Boolean,
    required: true
  }
}, {
  timestamps: true
})

const Rating = mongoose.model('Rating', ratingSchema)

export default Rating
