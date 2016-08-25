let gulp = require("gulp");
let nodemon = require("gulp-nodemon");
let less = require("gulp-less");
let autoprefixer = require("gulp-autoprefixer");
let minicss = require("gulp-cssnano");
let sourcemaps = require("gulp-sourcemaps");
let webserver = require("gulp-webserver");
let inject = require("gulp-inject");
let imagemin = require("gulp-imagemin");
let pngquant = require("imagemin-pngquant");
let typescript = require("typescript");
let uglify = require("gulp-uglify");
let ts = require("gulp-typescript");
let plumber = require("gulp-plumber");
// <%- gulpTS %> // Typescript
// <%- gulpBabel %> // Babel

let GulpConfig = require("./gulpconfig");

let tsconfig = require("./tsconfig");

let rootDir = "app";
let webServerPort = 3501;
let webServerReloadPort = Number(`3${webServerPort}`);

let gc = new GulpConfig.GulpConfig(rootDir);


gulp.task("less", function() {
    var target = gulp.src(gc.IndexFile);
    var sources = gulp.src(gc.CSSFiles, { read: false });

    gulp.src(gc.LessCompileFiles)
        .pipe(plumber({}))
        .pipe(sourcemaps.init())
        .pipe(less({}))
        .pipe(autoprefixer({
            browsers: ["last 2 versions"]
            //browsers: ["5%""]
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(gc.CSSRoot));

    target.pipe(inject(sources, { relative: true }))
        .pipe(gulp.dest(gc.AppRoot));
});

gulp.task("webServerDev", function() {
    gulp.src(["./"])
        .pipe(webserver({
            livereload: {
                enable: true,
                port: webServerReloadPort
            },
            path: "/",
            directoryListing: false,
            open: true,
            host: "localhost",
            https: false,
            port: webServerPort,
            fallback: gc.IndexFile

        }));
});

// gulp.task("typescript", function() {

// //     let tsProject = ts.createProject('tsconfig.json', { sortOutput: true, declaration: true });
// //     var tsResult = tsProject.src()
// //     .pipe(sourcemaps.init())
// //     .pipe(ts(tsProject)
// //     .pipe(sourcemaps.write('.')));

// //     return tsResult.pipe(gulp.dest('app/assets/js/'));

//         let sources = gulp.src(gc.TypeScriptFiles)
//             .pipe(plumber({}))
//             .pipe(sourcemaps.init())
//             .pipe(ts(tsconfig.compilerOptions));         
            

//        sources.dts
//         .pipe(gulp.dest(gc.TypeScriptCompiledFiles));
                
//         // DO NOT CHANGE ORDER OR SOURCE MAPS WILL 
//         // WILL NOT BE GENERATED
//        sources.js       
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest(gc.TypeScriptCompiledFiles));        

//  });

gulp.task("watch", function() {

    gulp.watch([gc.All_LESS_File, gc.HtmlFiles], ["less"]);
    // gulp.watch([gc.TypeScriptFiles], ["typescript"]);
    
});

gulp.task("default", ["webServerDev", "watch", "less"]); 