'use strict';

var path    = require('path')
  , assert  = require('yeoman-generator').assert
  , helpers = require('yeoman-generator').test;

describe('java:app', function () {
  var deps = [
    [helpers.createDummyGenerator(), 'java:class']
  ];

  describe('non-namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .inDir(path.join(__dirname, '../.tmp/app/non-namespaced'))
        .withGenerators(deps)
        .withOptions({
          'skip-intro': true
        })
        .withPrompt({
          title: 'Awesome Project'
        , description: 'This is an awesome project!'
        , author: 'John Doe'
        , email: 'john@example.com'
        , namespace: false
        })
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        '.editorconfig'
      , '.gitignore'
      , 'README.md'
      , 'build.gradle'
      , 'src/main/java/package-info.java'
      , 'src/test/java/package-info.java'
      ]);

      assert.noFileContent([
        ['src/main/java/package-info.java', /package ;/]
      , ['src/test/java/package-info.java', /package ;/]
      ]);
    });
  });

  describe('namespaced', function () {
    before(function (done) {
      helpers.run(path.join(__dirname, '../generators/app'))
        .inDir(path.join(__dirname, '../.tmp/app/namespaced'))
        .withGenerators(deps)
        .withOptions({
          'skip-intro': true
        })
        .withPrompt({
          title: 'Awesome Project'
        , description: 'This is an awesome project!'
        , author: 'John Doe'
        , email: 'john@example.com'
        , namespace: 'com.example.project'
        })
        .on('end', done);
    });

    it('creates expected files', function () {
      assert.file([
        'src/main/java/com/example/project/package-info.java'
      , 'src/test/java/com/example/project/package-info.java'
      ]);

      assert.fileContent([
        ['src/main/java/com/example/project/package-info.java', /package com.example.project;/]
      , ['src/test/java/com/example/project/package-info.java', /package com.example.project;/]
      ]);
    });
  });
});
