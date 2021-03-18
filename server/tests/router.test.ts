import connection = require('./models/testindex');
import mongoose = require('mongoose')
import app from '../testindex';

const request = require('supertest'); // import supertest for apis

// beforeAll(async (done) => {
//   await connection;
//   done();
// });

describe('Get all plants endpoint', () => {
  it('should get all plants', async (done) => {
    const response = await request(app).get('/plants');
    expect(response.status).toBe(200);
    done();
  });
});

describe('Get plant by name', () => {
  it('should get plant by its name', async (done) => {
    const response = await request(app).get('/plants/aloevera');
    expect(response.status).toBe(200);
    done();
  });
});

describe('Post plant', () => {
  it('should get post plant to db', async (done) => {
    const response = await request(app).post('/plants')
      .send({
        common_name: 'Testplant',
        scientific_name: 'testplantus',
        origin: 'Testville',
        water_days: 5,
        light: 'none',
        humidity: 'high',
        temperature: {
          max: 95,
          min: 75,
        },
        feed: 'mice',
        repot: 'yes',
        pets: 'none',
        difficulty: 2,
        common_problems: {
          type: [
            {
              syptom: 'brown leaves',
              cause: 'underwatering',
            },
          ],
        },
      });
    expect(response.status).toBe(201);
    done();
  });
});

describe('Get user plants', () => {
  it('get user plants', async (done) => {
    const response = await request(app).get('/userplants');
    expect(response.status).toBe(200);
    done();
  });
});

describe('Post user plant', () => {
  it('should get post user plant to db', async (done) => {
    const response = await request(app).post('/userplants')
      .send({
        name: 'Tom',
        common_name: 'Testplant',
        scientific_name: 'testplantus',
        origin: 'Testville',
        water_days: 5,
        light: 'none',
        humidity: 'high',
        temperature: {
          max: 95,
          min: 75,
        },
        feed: 'mice',
        repot: 'yes',
        pets: 'none',
        difficulty: 2,
        common_problems: {
          type: [
            {
              syptom: 'brown leaves',
              cause: 'underwatering',
            },
          ],
        },
      });
    expect(response.status).toBe(201);
    done();
  });
});

describe('Update next water', () => {
  it('should update user plant next water', async (done) => {
    const response = await request(app).put('/userplants/60538f743ab6c5306c41d1fd')
      .send({
        next_water: Date.now(),
      });
    expect(response.status).toBe(200);
    done();
  });
});

test('test that jest works', () => {
  expect(2).toBe(2);
});

// afterAll(async (done) => {
//   // Closing the DB connection allows Jest to exit successfully.
//   mongoose.connection.close();
//   done();
// });
