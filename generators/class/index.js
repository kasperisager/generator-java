'use strict';

var util   = require('util')
  , path   = require('path')
  , yeoman = require('yeoman-generator');

var ClassGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    var parts = this.name.split('.')
      , name  = parts.pop();

    this.props = this.config.getAll();
    this.props.package = (this.props.namespace ? '.' : '') + parts.join('.');
    this.props.dir = parts.join('/');
    this.props.name = name;
  },

  writing: function () {
    var namespace = (this.props.namespace || '').replace('.', '\/');

    this.template('Class.java', path.join('src/main/java', namespace, this.props.dir, this.props.name + '.java'));
    this.template('ClassTest.java', path.join('src/test/java', namespace, this.props.dir, this.props.name + 'Test.java'));
  }
});

module.exports = ClassGenerator;
