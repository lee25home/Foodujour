// var db = require(__server + '/lib/db');
// var request = require('supertest-as-promised');
// var MealsAPI = require(__server + '/apis/meals-api');
// var request = require('supertest');
// var agent = request.agent(TestHelper.createApp);
//
// // API Routes
// var signup = '/api/users/auth/signup';
// var login = '/api/users/auth/login';
//
// xdescribe('Meals API', function() {
//   before(function() {
//     agent.post(login)
//       .send({ username: 'nanner34', password: 'nanner34' })
//       .end(function(err, res) {
//         console.log('login', res.body);
//       });
//   });
//
//   // valid meal should insert
//   var meal1 = {
//     user_id: 1,
//     date: Math.floor(Date.now() / 1000),
//     name: 'Hollaburger',
//     location: 'Hollaville, USA',
//     rating: 2,
//     notes: 'These are some notes',
//     image: 'https://img.google.com/horsehead.png'
//   };
//
//   // valid meal without notes or image
//   var meal2 = {
//     user_id: 2,
//     date: Math.floor(Date.now() / 1000),
//     name: 'Dead Lobster',
//     location: 'Rooflecoast, US',
//     rating: 2
//   };
//
//   // no name included should not insert
//   var invalidMeal = {
//     user_id: 1,
//     date: Math.floor(Date.now() / 1000),
//     location: 'Hollaville, USA',
//     rating: 2,
//     notes: 'These are some notes',
//     image: 'https://img.google.com/horsehead.png'
//   };
//
//   describe('testing before', function() {
//     // it('POST /meal adds a new meal', function(done) {
//     //   agent.post()
//     // });
//
//     it('GET /meals returns array of meals belonging to user', function(done) {
//       agent.get('/api/meals/')
//       .end(function(err, res) {
//         console.log(res.body);
//         done();
//       });
//     });
//   });
// });
