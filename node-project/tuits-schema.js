import mongoose from 'mongoose';
const schema = mongoose.Schema({
  userName: String,
  time: String,
  title: String,
  tweets: String,
  _id: String,
  likes: Number,
  retweets: Number,
  replies: Number,
  liked: Boolean,
  imageURL: String,
}, {collection: 'tuits'});
export default schema;