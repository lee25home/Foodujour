var travis = (process.env.TRAVIS ? process.env.TRAVIS.trim().toLowerCase() === 'true' : false);
require('dotenv').load({ silent: travis });
process.env.NODE_ENV = 'test';

// The following allows you to require files independent of
// the location of your test file.
// Example:
//  var User = require(__server + '/models/user.js')
//
global.__server = __dirname + '/../server';
global.__client = __dirname + '/../client';
global.db = require(__server + '/lib/db');

// Assertions
var chai = require('chai');
global.expect = chai.expect;
chai.should();


// Helper Functions
//
// This is the object you can attach any helper functions used across
// several test files.
global.TestHelper = {};

TestHelper.createApp = require(__server + '/app');
