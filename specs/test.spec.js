var ID_DO_FILME = 'tt1285016';
var API_KEY = '52ec71bf';

var request = require('supertest')("http://www.omdbapi.com/?i="+ID_DO_FILME+"&apikey="+API_KEY);
var expect = require('chai').expect;

describe("OMDb API - The Open Movie Database", function () {

  it("validar titulo", function (done) {
    request
      .get('')
      .expect(200)
      .end(function (err, res) {
        expect(res.body.Title).to.equal("The Social Network");    
        done();
        console.log(res.body.Title);    
      });
  })
  it("validar ano", function (done) {
    request
      .get('')
      .expect(200)
      .end(function (err, res) {
        expect(res.body.Year).to.equal("2010");    
        done();
        console.log(res.body.Year);    
      });
  })
  it("validar idioma", function (done) {
    request
      .get('')
      .expect(200)
      .end(function (err, res) {
        expect(res.body.Language).to.equal("English, French");    
        done();
        console.log(res.body.Language);    
      });
  })
});