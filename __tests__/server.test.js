const request = require('supertest');
const app = require('../server');

describe('GET /', function () {
    it('Debería responder con el archivo  html', async ()=> {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toContain('text/html');
    });
});