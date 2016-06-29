let PACKAGE_JSON = '\\package.json';
let GULP_FILE = '\\gulpfile.js';
let GIT_IGNORE = '\\.gitignore';
let GULP_CONFIG = '\\gulpconfig.js';
let TS_CONFIG = '\\tsconfig.json';

let INDEX_HTML = '\\app\\index.html';

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

// let ANGULAR_MODULE = '\\app\\assets\\ts\\Core\\app.ts';
// let ANGULAR_ROUTES = '\\app\\assets\\ts\\Core\\routes.config.js';
// let ANGULAR_MAIN_CONTROLLER = '\\app\\assets\\ts\\Core\\MainController.ts';

let LESS_CUSTOM = '\\app\\assets\\less\\custom.less';
let LESS_MAIN = '\\app\\assets\\less\\custom.less';
let LESS_VARIABLES = '\\app\\assets\\less\\includes\\variables.less';

// let ALL = [PACKAGE_JSON, GULP_FILE, GULP_CONFIG, GIT_IGNORE, INDEX_HTML, ANGULAR_MODULE, ANGULAR_MAIN_CONTROLLER, LESS_CUSTOM, LESS_MAIN, LESS_VARIABLES];

let ALL = [PACKAGE_JSON, GULP_FILE, GULP_CONFIG, GIT_IGNORE, INDEX_HTML, LESS_CUSTOM, LESS_MAIN, LESS_VARIABLES, TS_CONFIG];


let ANGULAR = {
    ANGULAR_CORE_COMPONENT_NAME: ANGULAR_CORE_COMPONENT_NAME,
    ANGULAR_DEFAULT_FEATURE_FOLDER_STRUCTURE: ANGULAR_DEFAULT_FEATURE_FOLDER_STRUCTURE,
    ANGULAR_CORE_COMPONENT_FOLDER: ANGULAR_CORE_COMPONENT_FOLDER
};

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

let config = {
ALL: ALL
};

module.exports = {
    Files: config,
    FOLDERS: FOLDERS,
    APP_FOLDERS: APP_FOLDERS,
    ANGULAR: ANGULAR
};