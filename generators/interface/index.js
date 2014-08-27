'use strict';

var util   = require('util')
  , path   = require('path')
  , yeoman = require('yeoman-generator');

var InterfaceGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    var parts = this.name.split('.')
      , name  = parts.pop();

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

    this.template('Interface.java', path.join('src/main/java', namespace, this.props.dir, this.props.name + '.java'));
  }
});

module.exports = InterfaceGenerator;
