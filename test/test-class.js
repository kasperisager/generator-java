'use strict';

var path    = require('path')
  , assert  = require('yeoman-generator').assert
  , helpers = require('yeoman-generator').test;

describe('java:class', function () {
  describe('non-namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/class'))
        .inDir(path.join(__dirname, '../.tmp/class'))
        .withArguments([
          'Class'
        ])
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        'src/main/java/Class.java'
      , 'src/test/java/ClassTest.java'
      ]);
    });
  });

  describe('namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/class'))
        .inDir(path.join(__dirname, '../.tmp/class'))
        .withArguments([
          'namespace.Class'
        ])
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        'src/main/java/namespace/Class.java'
      , 'src/test/java/namespace/ClassTest.java'
      ]);
    });

  });
});
