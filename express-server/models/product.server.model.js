import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  productName: String,
  productDescription: String
});

export default mongoose.model('Product', Schema);
