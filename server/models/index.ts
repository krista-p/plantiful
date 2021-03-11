import mongoose from 'mongoose';

exports = mongoose.connect('mongodb://localhost:27017/plant_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
