import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/test_plant_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
