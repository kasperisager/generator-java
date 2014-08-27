'use strict';

var path    = require('path')
  , assert  = require('yeoman-generator').assert
  , helpers = require('yeoman-generator').test;

describe('java:interface', function () {
  describe('non-namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/interface'))
        .inDir(path.join(__dirname, '../.tmp/interface/non-namespaced'))
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

  describe('namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/interface'))
        .inDir(path.join(__dirname, '../.tmp/interface/namespaced'))
        .withArguments([
          'namespace.Interface'
        ])
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        'src/main/java/namespace/Interface.java'
      ]);
    });
  });
});
