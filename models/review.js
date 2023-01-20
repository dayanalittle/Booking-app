import mongoose from 'mongoose'

const Schema = mongoose.Schema


const reviewSchema = new Schema({
  author: {type: String, required: true},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  createdAt: {type: String, required: true},
  content: {type: String, required: true},
  date: {type: String, required: true},
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}