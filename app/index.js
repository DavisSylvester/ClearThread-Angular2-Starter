let generators = require('yeoman-generator');
let mkdir = require('mkdirp');
let yosay = require('yosay');
let chalk = require('chalk');
let config = require('./config.js');
let genConfig = require('./generatorConfig.js');

let angular2_version = "RC3";

module.exports = generators.Base.extend({
    
     contructor: function () {

    },
    
     prompting: function () {
        var me = this;
        var packages;

        var message = chalk.green.bold("ClearThread Angular 2 Project Starter")
            + chalk.white(`\n Template is build on Angular 2 version: ${angular2_version}`);

        me.log(yosay(message, { maxLength: 40 }));

        me.prompt({
            type: 'checkbox',
            name: 'packages',
            message: 'Which packages would you like to include?\n',
            choices: ['Typescript', 'Babel', 'FontAwesome', 'Material Design']
        }).then(function (answers) {
            packages = answers;
            
            var that = this;
            var data = answers.packages;
            
            var fs = me.fs;
            var destRoot = me.destinationRoot();
            var tmpl = me.sourceRoot();

            let Typescript_Directory = genConfig.ANGULAR.ANGULAR_CORE_COMPONENT_FOLDER;

            // console.log(`DestRoot: ${me.destinationRoot()} : Template: ${tmpl}\n`);

            // DETERMINES WHAT OPTIONS THEY HAVE SELECTED TO 
            // INSTALL.  IF IT'S AN EMPTY STRING NOT SELECTED
            // OTHERWISE WRITE THE TEMPLATE STRING IN THE INDEX FILE
            var gulpTS = '';
            var gulpBabel = '';
            
            //CREATE DIRECTORY STRUCTURE
            createBasicDirectoryStructure();

            //CREATE ANGULAR DIRECTORY STRUCTURE
            CreateAngular();
            
            // Copy All Template Files
            genConfig.Files.ALL.map(function (value, index) {
                // console.log(tmpl + genConfig.Files.ALL[index]);
                // console.log(destRoot + genConfig.Files.ALL[index]);
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
                me.npmInstall(['Typescript', 'gulp-typescript', 'typings'], { 'saveDev': true });
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

            function createBasicDirectoryStructure(){
                
                genConfig.FOLDERS.forEach((name) => {
                    mkdir(`${name}`,
                    // mkdir(`${genConfig.APP_FOLDERS.APP_ASSETS}\\${name}`,
                    (err) => { 
                        if (err){
                            console.log(err);
                        }else{
                            console.log(`Directory ${genConfig.APP_FOLDERS.APP_ASSETS}\\${name} was created!`);
                        }
                    });
                });
            }

            function CreateAngular() {
                createBasicInitialComponentDirectoryStructure();
            }

            function createBasicInitialComponentDirectoryStructure(){
               
               genConfig.ANGULAR.ANGULAR_DEFAULT_FEATURE_FOLDER_STRUCTURE.forEach((name) => {
                    mkdir(`${genConfig.ANGULAR.ANGULAR_CORE_COMPONENT_FOLDER}\\${name}`);
                });
            }

            function createTypescriptCoreComponentDirectories(){

            }


        });

        
       
    }
});