import mongoose from 'mongoose'

const Schema = mongoose.Schema


const reviewSchema = new Schema({
  author: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  date: {type: Date, required: true},
  review: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}