var chai = require('chai');
var expect = chai.expect;

describe('homepage', function() {

  it('hello worlds', function(done) {
    browser
      .url('http://localhost:3000')
      .getText('body', function(err, text) {
        expect(text).to.equal('"Hello world"');
      })
      .call(done);
  });
});

describe('other page', function() {

  it('says other page', function(done) {
    browser
      .url('http://localhost:3000/otherpage')
      .getText('h1', function(err, text) {
        expect(text).to.equal('other page');
      })
      .call(done);
  });

  it('gets title', function(done) {
    browser
      .url('http://localhost:3000/otherpage')
      .title(function(err, res) {
        expect(res.value).to.equal('title here');
      })
      .call(done);
  });
});
