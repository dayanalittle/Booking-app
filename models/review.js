import mongoose from 'mongoose'

const Schema = mongoose.Schema


const reviewSchema = new Schema({
  author: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  createdAt: String,
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}