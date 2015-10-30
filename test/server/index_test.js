var request = require('supertest');

describe('The Server', function() {

  var app = TestHelper.createApp;

  it('serves an example endpoint', function() {

    // Mocha will wait for returned promises to complete
    return request(app)
      .get('/api/tags-example')
      .expect(200)
      .expect(function(response) {
        expect(response.body).to.include('node');
      });
  });
});
