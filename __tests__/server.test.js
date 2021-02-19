'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Server tests', () => {
    it('should pass a 404 error when no route is triggered', async () => {
        const response = await request.get('/wrong');

        expect(response.status).toEqual(404);
        expect(response.text).toEqual('That route is not found')
    });

    it('should be able to create a pet on POST /pets', async () => {

        const response = await request.post('/pets').send({
          name: 'Spike',
          animal: 'dog',
        });
    
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(1);
        expect(response.body.data.name).toEqual('Spike');
      });
    
        it ('should get a pet with by request parameter on GET /pets',  async () => {
        const response = await request.get('/pets/1');
    
        console.log(response.body);
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(1);
      });
    
      it ('should update an existing pet on PUT /pets/:id', async () => {
        const response = await request.put('/pets/1').send({
          name: 'Bob',
          animal: 'dog',
        });
    
        console.log(response.body);
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(1);
        expect(response.body.data.name).toEqual('Bob');
      });

      it('should be able to create a sport on POST /sports', async () => {

        const response = await request.post('/sports').send({
          name: 'Tom Brady',
          sport: 'football',
        });
    
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(1);
        expect(response.body.data.name).toEqual('Tom Brady');
      });
    
        it ('should get a sport with by request parameter on GET /sports',  async () => {
        const response = await request.get('/sports/1');
    
        console.log(response.body);
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(1);
      });
    
      it ('should update an existing sport on PUT /sports/:id', async () => {
        const response = await request.put('/sports/1').send({
          name: 'Lebron',
          sport: 'basketball',
        });
    
        console.log(response.body);
        expect(response.status).toEqual(200);
        expect(response.body.id).toEqual(1);
        expect(response.body.data.name).toEqual('Lebron');
      });
    });