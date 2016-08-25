let generators = require('yeoman-generator');
let mkdir = require('mkdirp');
let yosay = require('yosay');
let chalk = require('chalk');
let config = require('./config.js');
let genConfig = require('./generatorConfig.js');

let angular2_version = "RC5";

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
            choices: ['Typescript', 'Babel', 'FontAwesome', 'Material Design Lite']
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
            let IndexFile_Font_Awesome = ``;
            let IndexFile_Material_Design = ``;


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

                gulpBabel = `var babel = require(\'gulp-babel\');`;

            }

            if (data.indexOf('FontAwesome') !== -1) {
                InstallFontAwesome();

            }

            if (data.indexOf('Material Design Lite') !== -1) {
                InstallMaterialDesignLite();

            }

            // ReCopyGulpFile();

            function ReCopyGulpFile() {
                fs.copyTpl(
                    tmpl + genConfig.REQUIRED_FILES.GULP_CONFIG,
                    destRoot + genConfig.REQUIRED_FILES.GULP_CONFIG,
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

            function InstallMaterialDesignLite() {
                me.npmInstall(['material-design-lite'], { 'save': true });
            }

            function createBasicDirectoryStructure() {

                genConfig.FOLDERS.forEach((name) => {
                    mkdir(`${name}`,
                        // mkdir(`${genConfig.APP_FOLDERS.APP_ASSETS}\\${name}`,
                        (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(`Directory ${genConfig.APP_FOLDERS.APP_ASSETS}\\${name} was created!`);
                            }
                        });
                });
            }

            function CreateAngular() {
                createBasicInitialComponentDirectoryStructure();
                createTypescriptCoreComponentDirectories();
                createUtilityFilesAndFolders();
                CopyViewsFilesAndFolders();
                CopyViewsForDashboard();
            }

            function createBasicInitialComponentDirectoryStructure() {

                genConfig.ANGULAR.ANGULAR_DEFAULT_FEATURE_FOLDER_STRUCTURE.forEach((name) => {
                    mkdir(`${genConfig.ANGULAR.ANGULAR_CORE_COMPONENT_FOLDER}\\${name}`);
                });
            }

            function createTypescriptCoreComponentDirectories() {
                // Copy Angular Core Component Files
                genConfig.ANGULAR.ANGULAR_CORE_COMPONENT_FILES.forEach((name) => {
                    console.log(name);

                    fs.copy(
                        `${tmpl}\\${name}`,
                        `${destRoot}\\${name}`);


                });

                // Copy Angular Core Routes
                genConfig.ANGULAR.ANGULAR_CORE_ROUTES_FILES.forEach((name) => {
                    console.log(name);

                    fs.copy(
                        `${tmpl}\\${name}`,
                        `${destRoot}\\${name}`);

                });

                // Copy Angular Core Services
                genConfig.ANGULAR.ANGULAR_CORE_SERVICES_FILES.forEach((name) => {
                    console.log(name);

                    fs.copy(
                        `${tmpl}\\${name}`,
                        `${destRoot}\\${name}`);

                });

                // Copy Angular Dashboard Components
                genConfig.ANGULAR.ANGULAR_DASHBOARD_COMPONENT_FILES.forEach((name) => {
                    console.log(name);

                    fs.copy(
                        `${tmpl}\\${name}`,
                        `${destRoot}\\${name}`);

                });

            }

            function createUtilityFilesAndFolders() {
                // Copy Utility Files and Folder
                mkdir(`${genConfig.Utilities.UTILS_DIRECTORY}`);
                genConfig.Utilities.UTILS_FILES.forEach((name) => {
                    console.log(name);

                    fs.copy(
                        `${tmpl}\\${name}`,
                        `${destRoot}\\${name}`);


                });
            }

            function CopyViewsFilesAndFolders() {
                // Copy Views for Shared Directory               
                genConfig.Views.VIEWS_SHARED_FILES.forEach((name) => {
                    console.log(name);

                    fs.copy(
                        `${tmpl}\\${name}`,
                        `${destRoot}\\${name}`);
                });



            }

            function CopyViewsForDashboard() {
                // Copy Views for Shared Directory               
                genConfig.Views.VIEWS_DASHBOARD_FILES.forEach((name) => {
                    console.log(name);

                    fs.copy(
                        `${tmpl}\\${name}`,
                        `${destRoot}\\${name}`);
                });



            }

            function ReinstallRXS() {
                
                me.npmInstall(['rxjs@5.0.0-beta.6'], { 'save': true });


            }

            
            ReinstallRXS();
           


        });



    }
});