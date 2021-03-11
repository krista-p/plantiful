import { UserPlant } from '../models/userPlant';
import { Request, Response } from 'express';

exports.getUserPlants = async (_: Request, res: Response) => {
  try {
    const userPlants = await UserPlant.find();
    res.status(200);
    res.send(userPlants);
  } catch (error) {
    console.error('GET USER PLANTS:', error); // eslint-disable-line no-console
    res.status(500);
    res.send(error);
  }
};

exports.postUserPlant = async (req: Request, res: Response) => {
  try {
    const userPlant = await UserPlant.create(req.body);
    res.status(201);
    res.send(userPlant);
  } catch (error) {
    console.error('POST USER PLANT:', error); // eslint-disable-line no-console
    res.status(500);
    res.send(error);
  }
};

exports.updateNextWater = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userPlant = await UserPlant.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(userPlant);
  } catch (error) {
    console.error('UPDATE USER PLANT:', error); // eslint-disable-line no-console
    res.status(500);
    res.send(error);
  }
};

exports.deleteUserPlant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await UserPlant.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    console.error('DELETE USER PLANT:', error); // eslint-disable-line no-console
    res.status(500);
    res.send(error);
  }
};
