require('../helper')
var app = require('../../app')
var http = require('http')
db = require('../../config/database')
var mocha = require('mocha')
var server;

before(function(){
  server = http.createServer(app)
  server.listen(0)
  browser.baseUrl = 'http://localhost:' + server.address().port
});

beforeEach(function(){
  return browser.ignoreSynchronization = true
})

after(function(){
  server.close()
});

describe('/baseball_cards', function(){
  it('shows a title', function(){
    browser.get('/baseball_cards');

    element(by.tagName('h1')).getText().then(function(text){
      expect(text).to.equal('Baseball Cards')
    })
  })
  it('displays Go Yankees', function(){

    element(by.tagName('h2')).getText().then(function(text){
      expect(text).to.equal('Go Yankees')
    })
  })
})
