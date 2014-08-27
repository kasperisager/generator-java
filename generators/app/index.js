'use strict';

var util   = require('util')
  , path   = require('path')
  , yeoman = require('yeoman-generator')
  , yosay  = require('yosay');

var JavaGenerator = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    if (!this.options['skip-intro']) {
      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the wonderful Java generator!'
      ));
    }

    var prompts = [{
      type: 'input'
    , name: 'title'
    , message: 'Name your project'
    , default: this.config.get('title')
    }, {
      type: 'input'
    , name: 'description'
    , message: 'What\'s your project about? (optional)'
    , default: this.config.get('description')
    }, {
      type: 'input'
    , name: 'author'
    , message: 'What\'s your name?'
    , default: this.config.get('author')
    }, {
      type: 'input'
    , name: 'email'
    , message: 'What\'s your email?'
    , default: this.config.get('email')
    }, {
      type: 'input'
    , name: 'namespace'
    , message: 'Choose a package namespace (optional)'
    , default: this.config.get('namespace')
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      this.config.set(props);

      done();
    }.bind(this));
  },

  configuring: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
  },

  default: function () {
    this.template('README.md');
  },

  writing: {
    config: function () {
      this.directory('config');
    },

    meta: function () {
      var namespace = (this.props.namespace || '').replace('.', '\/');

      this.template('package-info.java', path.join('src/main/java', namespace, 'package-info.java'));
      this.template('package-info.java', path.join('src/test/java', namespace, 'package-info.java'));
    },

    build: function () {
      this.template('build.gradle');
    }
  },

  end: function () {
    this.config.save();

    this.composeWith('java:class', {
      args: ['Main']
    });
  }
});

module.exports = JavaGenerator;
