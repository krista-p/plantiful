import { Schema, model } from 'mongoose';

const UserPlantSchema: Schema = new Schema({
  name: { type: String, required: true },
  common_name: { type: String, required: true },
  scientific_name: { type: String, required: true },
  origin: { type: String, required: true },
  water_days: { type: Number, required: true },
  next_water: { type: Date, required: true, default: Date.now },
  light: { type: String, required: true },
  humidity: { type: String, required: true },
  temperature: {
    type: {
      max: Number,
      min: Number,
    },
    required: true,
  },
  feed: { type: String, required: true },
  repot: { type: String, required: true },
  pets: { type: String, required: true },
  difficulty: { type: Number, required: true },
  common_problems: {
    type: [
      {
        symptom: String,
        cause: String,
      },
    ],
    required: true,
  },
});

export const UserPlant = model('UserPlant', UserPlantSchema);
