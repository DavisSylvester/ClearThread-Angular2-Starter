var generators = require('yeoman-generator');
var mkdir = require('mkdirp');
var yosay = require('yosay');
var chalk = require('chalk');
var config = require('./config.js');
var genConfig = require('./generatorConfig.js');

let angular2_version = "RC3";

module.exports = generators.Base.extend({
        contructor: function () {
            console.log(genConfig);
    },
    
     prompting: function () {
        var me = this;

        var message = chalk.green.bold("ClearThread Angular 2 Project Starter")
            + chalk.white(`\n Template is build on Angular 2 version: ${angular2_version}`);

        me.log(yosay(message, { maxLength: 40 }));

        me.prompt({
            type: 'checkbox',
            name: 'packages',
            message: 'Which packages would you like to include?',
            choices: ['Typescript', 'Babel', 'FontAwesome']
        }, function (answers) {
            var that = this;
            var data = answers.packages;

            var fs = me.fs;
            var destRoot = me.destinationRoot();
            var tmpl = me.sourceRoot();

            var gulpTS = '';

            var gulpBabel = '';
            
            // Copy All Template Files
            genConfig.Files.ALL.map(function (value, index) {
                // console.log(tmpl + genConfig.Files.ALL[index]);
                
                fs.copy(
                    tmpl + genConfig.Files.ALL[index],
                    destRoot + genConfig.Files.ALL[index]);
            });

            me.npmInstall();


            if (data.indexOf('Typescript') !== -1) {
                InstallTypeScript();
                gulpTS = "var ts = require(\'gulp-typescript\');";
            }

            if (data.indexOf('Babel') !== -1) {
                InstallBabel();
                
                gulpBabel = "var babel = require(\'gulp-babel\');"
                
            }

            if (data.indexOf('FontAwesome') !== -1) {
                InstallFontAwesome();

            }
            
            ReCopyGulpFile();
            
            function ReCopyGulpFile() {
                fs.copyTpl(
                    tmpl + genConfig.Files.GULP_FILE,
                    destRoot + genConfig.Files.GULP_FILE,
                    { 
                        gulpTS: gulpTS,
                        gulpBabel: gulpBabel
                    }
                );
            }


            function InstallTypeScript() {
                mkdir(config.Files.TypeScriptRoot);
                mkdir(config.Files.TypeScriptAppRoot);
                me.npmInstall(['Typescript', 'Gulp-Typescript', 'typings'], { 'saveDev': true });
            }

            function InstallBabel() {
                CreateBabelDirectories();
                InstallBabel();
            }

            function CreateBabelDirectories() {
                mkdir(config.Files.BabelScriptRoot);
            }

            function InstallBabel() {
                me.npmInstall(['babel', 'gulp-babel', 'babel-preset-es2015', 'typings'], { 'saveDev': true });
            }

            function InstallFontAwesome() {
                me.npmInstall(['font-awesome'], { 'save': true });
            }

        });
    }
});