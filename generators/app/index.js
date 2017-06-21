'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-rn-component') + '! ⚛'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'componentname',
        message: 'What is the name of your component?',
        default: this.appname
      },
      {
          type: 'confirm',
          name: 'componentIsStatefull',
          message: 'should this extend the class component?',
          default: false
      },
      {
          type: 'confirm',
          name: 'componentHasStyle',
          message: 'Do you need a stylesheet?',
          default: false
      }

    ];

    return this.prompt(prompts).then(function (props) {
      this.log('creating component...', props.componentname);
      this.props = props;
    }.bind(this));
  },


 
  scaffoldFolders: function(){
      var self = this;
      console.log("SCAFFOLDING", this.props.componentname);
      mkdirp(self.props.componentname, function (err) {
         if (err) console.error(err)
         else console.log('Made directory! ⚛', self.props.componentname)
      });
  },

  copyMainFiles: function(){
   
      var context = { 
          name: this.props.componentname 
      };
   
      if (this.props.componentHasStyle) {
        this.template("style.js", this.props.componentname + "/style.js", context);
      }

      this.template("_index.js", this.props.componentname +"/index.js", context);    

      if (this.props.componentIsStatefull) {
        this.template("_statefullcomponent.js", this.props.componentname +"/" + this.props.componentname+ ".js", context);    
      } else {
        this.template("_statelesscomponent.js", this.props.componentname +"/" + this.props.componentname+ ".js", context);    
      }
  }
});
