'use strict';

var path    = require('path')
  , assert  = require('yeoman-generator').assert
  , helpers = require('yeoman-generator').test;

describe('java:enum', function () {
  describe('non-namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/enum'))
        .inDir(path.join(__dirname, '../.tmp/enum/non-namespaced'))
        .withArguments([
          'Enum'
        ])
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        'src/main/java/Enum.java'
      ]);

      assert.noFileContent([
        ['src/main/java/Enum.java', /package ;/]
      ]);
    });
  });

  describe('namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/enum'))
        .inDir(path.join(__dirname, '../.tmp/enum/namespaced'))
        .withArguments([
          'namespace.project.Enum'
        ])
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        'src/main/java/namespace/project/Enum.java'
      ]);

      assert.fileContent([
        ['src/main/java/namespace/project/Enum.java', /package namespace.project;/]
      ]);
    });
  });
});
