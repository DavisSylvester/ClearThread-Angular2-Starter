let PACKAGE_JSON = '\\package.json';
let GULP_FILE = '\\gulpfile.js';
let GIT_IGNORE = '\\.gitignore';
let GULP_CONFIG = '\\gulpconfig.js';
let TS_CONFIG = '\\tsconfig.json';
let JS_CONFIG = '\\jsconfig.json';
let TS_LINT = '\\tslint.json';
let TYPINGS = '\\typings.json';
let SYSTEM_CONFIG_JS = '\\app\\assets\\js\\system.config.js';

let REQUIRED_FILES = {
    PACKAGE_JSON: PACKAGE_JSON, 
    GULP_FILE: GULP_FILE, 
    GIT_IGNORE: GIT_IGNORE,
    GULP_CONFIG: GULP_CONFIG, 
    TS_CONFIG: TS_CONFIG, 
    JS_CONFIG: JS_CONFIG,
    TS_LINT: TS_LINT, 
    TYPINGS: TYPINGS, 
    SYSTEM_CONFIG_JS: SYSTEM_CONFIG_JS     
    
};


let INDEX_HTML = '\\index.html';

let appDirectoryName = 'app';
let assetFolderName = 'assets';
let viewsFolderName = 'views';
let typescriptFolderName = 'ts';
let javascriptFolderName = 'js';
let imagesFolderName = 'img';
let cssFolderName = 'css';
let lessFolderName = 'less';

let ANGULAR_CORE_COMPONENT_NAME = 'Core';

// CONFIGURATION FOR ANGULAR 2
let ANGULAR_DEFAULT_FEATURE_FOLDER_STRUCTURE = [
    "Classes",
    "Components",
    "Directives",
    "Enums",
    "Interfaces",
    "Models",
    "Routes",
    "Services",
    "Styles"
];


let APP_FOLDER = `${appDirectoryName}`;
let APP_ASSETS = `${APP_FOLDER}\\${assetFolderName}`;
let APP_VIEWS = `${APP_FOLDER}\\${viewsFolderName}`;
let APP_TYPESCRIPT = `${APP_ASSETS}\\${typescriptFolderName}`;
let APP_JAVASCRIPT = `${APP_ASSETS}\\${javascriptFolderName}`;
let APP_IMAGES = `${APP_ASSETS}\\${imagesFolderName}`;
let APP_CSS = `${APP_ASSETS}\\${cssFolderName}`;
let APP_LESS = `${APP_ASSETS}\\${lessFolderName}`;


let ANGULAR_TYPESCRIPT_FOLDER = `${APP_TYPESCRIPT}`;
let ANGULAR_CORE_COMPONENT_FOLDER = `${ANGULAR_TYPESCRIPT_FOLDER}\\${ANGULAR_CORE_COMPONENT_NAME}`;

let LESS_CUSTOM = '\\app\\assets\\less\\custom.less';
let LESS_MAIN = '\\app\\assets\\less\\custom.less';
let LESS_VARIABLES = '\\app\\assets\\less\\includes\\variables.less';

// let ALL = [PACKAGE_JSON, GULP_FILE, GULP_CONFIG, GIT_IGNORE, INDEX_HTML, ANGULAR_MODULE, ANGULAR_MAIN_CONTROLLER, LESS_CUSTOM, LESS_MAIN, LESS_VARIABLES];

let ALL = [PACKAGE_JSON, GULP_FILE, GULP_CONFIG, GIT_IGNORE, INDEX_HTML, LESS_CUSTOM, LESS_MAIN, LESS_VARIABLES, TS_CONFIG, JS_CONFIG, TS_LINT, TYPINGS, SYSTEM_CONFIG_JS];

let FOLDERS =   [ 
                    APP_FOLDER,               
                    APP_ASSETS,
                    APP_VIEWS,
                    APP_TYPESCRIPT,
                    APP_JAVASCRIPT,
                    APP_IMAGES,
                    APP_CSS,
                    APP_LESS
                ];

let APP_FOLDERS = {
                    APP_FOLDER: APP_FOLDER,               
                    APP_ASSETS: APP_ASSETS,
                    APP_VIEWS: APP_VIEWS,
                    APP_TYPESCRIPT: APP_TYPESCRIPT,
                    APP_JAVASCRIPT: APP_JAVASCRIPT,
                    APP_IMAGES: APP_IMAGES,
                    APP_CSS: APP_CSS,
                    APP_LESS: APP_LESS
};


// ANGULAR 2 CONFIGURATION AND SETUP FILES AND DIRECTORIES

let ANGULAR_CORE_DIRECTORY = `${ANGULAR_TYPESCRIPT_FOLDER}\\Core`;
let ANGULAR_CORE_ROUTES_DIRECTORY = `${ANGULAR_CORE_DIRECTORY}\\Routes`;
let ANGULAR_CORE_SERVICES_DIRECTORY = `${ANGULAR_CORE_DIRECTORY}\\Services`;

let ANGULAR_DASHBOARD_DIRECTORY = `${ANGULAR_TYPESCRIPT_FOLDER}\\Dashboard`;
let ANGULAR_DASHBOARD_COMPONENT_DIRECTORY = `${ANGULAR_DASHBOARD_DIRECTORY}\\Components`;

let ANGULAR_CORE_COMPONENT_FILES = [
    `${ANGULAR_CORE_DIRECTORY}\\app.routes.ts`,
    `${ANGULAR_CORE_DIRECTORY}\\CoreComponent.ts`,
    `${ANGULAR_CORE_DIRECTORY}\\Environments.ts`,
    `${ANGULAR_CORE_DIRECTORY}\\Main.ts`
 ];

let ANGULAR_CORE_ROUTES_FILES = [
    `${ANGULAR_CORE_ROUTES_DIRECTORY}\\navigationRoutes.ts`    
 ];

let ANGULAR_CORE_SERVICES_FILES = [
    `${ANGULAR_CORE_SERVICES_DIRECTORY}\\deploymentService.ts`    
 ];


let ANGULAR_DASHBOARD_COMPONENT_FILES = [
    `${ANGULAR_DASHBOARD_COMPONENT_DIRECTORY}\\DashboardComponent.ts`   
 ];

let ANGULAR = {
    ANGULAR_CORE_COMPONENT_NAME: ANGULAR_CORE_COMPONENT_NAME,
    ANGULAR_DEFAULT_FEATURE_FOLDER_STRUCTURE: ANGULAR_DEFAULT_FEATURE_FOLDER_STRUCTURE,
    ANGULAR_CORE_COMPONENT_FOLDER: ANGULAR_CORE_COMPONENT_FOLDER,
    ANGULAR_CORE_DIRECTORY: ANGULAR_CORE_DIRECTORY,
    ANGULAR_CORE_ROUTES_DIRECTORY: ANGULAR_CORE_ROUTES_DIRECTORY,
    ANGULAR_CORE_SERVICES_DIRECTORY: ANGULAR_CORE_SERVICES_DIRECTORY,
    ANGULAR_DASHBOARD_DIRECTORY: ANGULAR_DASHBOARD_DIRECTORY, 
    ANGULAR_DASHBOARD_COMPONENT_DIRECTORY: ANGULAR_DASHBOARD_COMPONENT_DIRECTORY,
    ANGULAR_CORE_COMPONENT_FILES: ANGULAR_CORE_COMPONENT_FILES, 
    ANGULAR_CORE_ROUTES_FILES: ANGULAR_CORE_ROUTES_FILES, 
    ANGULAR_CORE_SERVICES_FILES: ANGULAR_CORE_SERVICES_FILES,
    ANGULAR_DASHBOARD_COMPONENT_FILES: ANGULAR_DASHBOARD_COMPONENT_FILES 
};


let UTILS_DIRECTORY = `${ANGULAR_TYPESCRIPT_FOLDER}\\Utils`;

let UTILS_FILES = [
    `${UTILS_DIRECTORY}\\Dictionary.ts`    
 ];

let Utilities = {
     UTILS_DIRECTORY:   UTILS_DIRECTORY,
     UTILS_FILES:       UTILS_FILES
 };

 let VIEWS_DIRECTORY = `views`;
 let VIEWS_SHARED_DIRECTORY = `${VIEWS_DIRECTORY}\\shared`;
 let VIEWS_DASHBOARD_DIRECTORY = `${VIEWS_SHARED_DIRECTORY}\\dashboard`;

 let VIEWS_SHARED_FILES = [ 
     `${VIEWS_SHARED_DIRECTORY}\\index.html`

 ];

  let VIEWS_DASHBOARD_FILES = [ 
     `${VIEWS_DASHBOARD_DIRECTORY}\\index.html`

 ];

 let VIEWS = {
     VIEWS_DIRECTORY: VIEWS_DIRECTORY, 
     VIEWS_SHARED_DIRECTORY: VIEWS_SHARED_DIRECTORY, 
     VIEWS_DASHBOARD_DIRECTORY: VIEWS_DASHBOARD_DIRECTORY,
     VIEWS_SHARED_FILES: VIEWS_SHARED_FILES, 
     VIEWS_DASHBOARD_FILES: VIEWS_DASHBOARD_FILES
 };

let config = {
ALL: ALL
};

module.exports = {
    Files: config,
    REQUIRED_FILES: REQUIRED_FILES,
    FOLDERS: FOLDERS,
    APP_FOLDERS: APP_FOLDERS,
    ANGULAR: ANGULAR,
    Utilities: Utilities,
    Views: VIEWS
};