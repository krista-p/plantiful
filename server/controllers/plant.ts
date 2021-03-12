import { Request, Response } from 'express';
import { Plant } from '../models/plant';

exports.getPlants = async (_: Request, res: Response) => {
  try {
    const plants = await Plant.find();
    res.status(200);
    res.send(plants);
  } catch (error) {
    console.error('GET PLANTS:', error); // eslint-disable-line no-console
    res.status(500);
    res.send(error);
  }
};

exports.findPlant = async (req: Request, res: Response) => {
  try {
    const plant = await Plant.findOne({ common_name: req.params.name });
    res.status(200);
    res.send(plant);
  } catch (error) {
    console.error('GET PLANTS:', error); // eslint-disable-line no-console
    res.status(500);
    res.send(error);
  }
};

exports.postPlant = async (req: Request, res: Response) => {
  try {
    const plant = await Plant.create(req.body);
    res.status(201);
    res.send(plant);
  } catch (error) {
    console.error('POST PLANT:', error); // eslint-disable-line no-console
    res.status(500);
    res.send(error);
  }
};
