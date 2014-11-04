'use strict';

var path   = require('path')
  , yeoman = require('yeoman-generator');

var EnumGenerator = yeoman.generators.NamedBase.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);

    this.desc('Generate an empty Java enumerator. Supports optional namespacing through dot-notation.');

    this.argument('name', {
      desc: 'Name of the enumerator in Pascal case.'
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
    var namespace = (this.props.namespace || '').replace(/\./g, '/');

    this.template('Enum.java', path.join('src/main/java', namespace, this.props.dir, this.props.name + '.java'));
  }
});

module.exports = EnumGenerator;
