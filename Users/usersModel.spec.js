const request = require('supertest');

const server =require('../api/server');

const Users = require('../Users/usersModel');
const db = require('../data/dbConfig');


describe('server', function() {
    it('runs the test', function() {
        expect(true).toBe(true);
    })


describe('GET /', function() {
    it('should return 200 OK', function() {
        return request(server).get('/').then(res => {
            expect(res.status).toBe(200);
        })
    })
})

it('should return JSON', function() {
    //make GET request to /
    return request(server).get('/').then(res => {
        expect(res.type).toMatch(/json/i);
    })
})


describe('insert /', function() {
    it('should add a new user to the db', async function() {
        await Users.insert({name: 'Jay'})
        await Users.insert({name: 'Lilly'})

        const users = await db('users');
        expect(users).toHaveLength(4);
    })
})

it('should return JSON', function() {
    //make GET request to /
    return request(server).post('/').then(res => {
        expect(res.type).toMatch(/json/i);
    })
})





describe('delete()', function() {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('will delete a hobit from the db', async function () {
        await Users.insert({name: 'Cleo'})
        await Users.insert({name: 'Tom'})
        const users = await db('users');
        expect(users).toHaveLength(2);
    })
})
})

