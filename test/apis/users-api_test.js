// var request = require('supertest');
var agent = require('supertest-as-promised').agent(TestHelper.createApp);

// API Routes
var signup = '/api/users/auth/signup';
var login = '/api/users/auth/login';

describe('User API - Local', function() {
  before(function() {
    return db.deleteEverything();
  });

  describe('User Signup', function() {
    it('errors if username is not provided for signup', function(done) {
      return agent.post(signup)
      .send({ username: '', password: 'noots' })
      .then(function(res) {
        expect(res.body.signedUp).to.equal(false);
        expect(res.body.info.message).to.equal('Missing credentials');
        done();
      });
    });

    it('errors if password is not provided for signup', function(done) {
      return agent.post(signup)
      .send({ username: 'nanner1', password: '' })
      .then(function(res) {
        expect(res.body.signedUp).to.equal(false);
        expect(res.body.info.message).to.equal('Missing credentials');
        done();
      });
    });

    it('signs up a user', function(done) {
      return agent.post(signup)
      .send({ username: 'nanner12', password: 'nanner12' })
      .then(function(res) {
        expect(res.body.signedUp).to.equal(true);
        done();
      });
    });

    it('errors if user already exists', function(done) {
      return agent.post(signup)
      .send({ username: 'nanner12', password: 'nanner' })
      .then(function(res) {
        expect(res.body.signedUp).to.equal(false);
        expect(res.body.info.message).to.equal('User Already exists');
        done();
      });
    });
  });

  describe('User Login', function() {
    it('errors if username is not provided for login', function(done) {
      return agent.post(login)
      .send({ username: '', password: 'noots' })
      .then(function(res) {
        expect(res.body.loggedIn).to.equal(false);
        expect(res.body.noUser).to.equal(true);
        expect(res.body.info.message).to.equal('Missing credentials');
        done();
      });
    });

    it('errors if password is not provided for login', function(done) {
      agent.post(login)
      .send({ username: 'nanner1', password: '' })
      .then(function(res) {
        expect(res.body.loggedIn).to.equal(false);
        expect(res.body.noUser).to.equal(true);
        expect(res.body.info.message).to.equal('Missing credentials');
        done();
      });
    });

    it('errors if user does not exist', function(done) {
      agent.post(login)
      .send({ username: 'nanner1', password: 'nanner12' })
      .then(function(res) {
        expect(res.body.loggedIn).to.equal(false);
        expect(res.body.noUser).to.equal(true);
        expect(res.body.info.message).to.equal('Incorrect username');
        done();
      });
    });

    it('errors if password is incorrect', function(done) {
      agent.post(login)
      .send({ username: 'nanner12', password: 'nannerwrong' })
      .then(function(res) {
        expect(res.body.loggedIn).to.equal(false);
        expect(res.body.noUser).to.equal(true);
        expect(res.body.info.message).to.equal('Incorrect password');
        done();
      });
    });

    it('logs in if username and password are correct', function(done) {
      agent.post(login)
      .send({ username: 'nanner12', password: 'nanner12' })
      .then(function(res) {
        expect(res.body.loggedIn).to.equal(true);
        done();
      });
    });
  });

  describe('User Logout', function() {
    it('logs out a user', function(done) {
      agent.post('/api/users/auth/logout')
      .send()
      .then(function(res) {
        expect(res.body.loggedIn).to.equal(false);
        done();
      });
    });
  });
});
