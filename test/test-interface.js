'use strict';

var path    = require('path')
  , assert  = require('yeoman-generator').assert
  , helpers = require('yeoman-generator').test;

describe('java:interface', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/interface'))
      .inDir(path.join(__dirname, '../.tmp/interface'))
      .withArguments([
        'Interface'
      ])
      .on('end', done);
  });

  it('creates expected files', function () {
    assert.file([
      'src/main/java/Interface.java'
    ]);
  });
});
