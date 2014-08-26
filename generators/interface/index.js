'use strict';

var util   = require('util')
  , path   = require('path')
  , yeoman = require('yeoman-generator');

var InterfaceGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    var dir  = this.name.split('/')
      , name = dir.pop();

    this.props = this.config.getAll();
    this.props.package = dir.join('.');
    this.props.name = name;
  },

  writing: function () {
    var namespace = (this.props.namespace || '').replace('.', '\/');

    this.template('Interface.java', path.join('src/main/java', namespace, this.name + '.java'));
  }
});

module.exports = InterfaceGenerator;
