'use strict';

var path   = require('path')
  , yeoman = require('yeoman-generator');

var ClassGenerator = yeoman.generators.NamedBase.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.desc('Generate an empty Java class and unit test. Supports optional namespacing through dot-notation.');

    this.option('visibility', {
      desc: 'Specify the class visibility'
    , type: String
    , defaults: 'public'
    });

    this.argument('name', {
      desc: 'Name of the class in Pascal case.'
    , required: true
    , type: String
    });
  },

  initializing: function () {
    var parts = this.name.split('.')
      , name  = parts.pop();

    this.config.defaults({
      author: '<your name>'
    });

    this.props = this.config.getAll();
    this.props.package = parts.join('.');
    this.props.dir = parts.join('/');
    this.props.name = name;

    if (this.props.package) {
      this.props.package = (this.props.namespace ? '.' : '') + this.props.package;
    }
  },

  writing: function () {
    var namespace = (this.props.namespace || '').replace('.', '\/');

    this.template('Class.java', path.join('src/main/java', namespace, this.props.dir, this.props.name + '.java'));
    this.template('ClassTest.java', path.join('src/test/java', namespace, this.props.dir, this.props.name + 'Test.java'));
  }
});

module.exports = ClassGenerator;
