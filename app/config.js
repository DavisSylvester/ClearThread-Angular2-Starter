
var AppRoot =  'app/';
var SrcRoot = 'src/';
var SrcAssetRoot = SrcRoot + 'assets/';
var BuildRoot = 'build/';
var AssetsRoot = AppRoot + 'assets/';


var IndexFileName = 'index.html';
var IndexFile = AppRoot + IndexFileName;

var LessRoot = SrcAssetRoot + 'less/';
var LessCompileFiles = [LessRoot + 'custom.less'];
var LessFiles = LessRoot + '**/*.less';

var CSSRoot = AssetsRoot  + 'css/';
var CSSFiles = CSSRoot  + '**/*.css';
var CSSMapRoot = CSSRoot;

var TypeScriptRoot = SrcRoot + 'assets/ts/';
var TypeScriptAppRoot =  AssetsRoot + 'js/';
var TypeScriptFiles = TypeScriptRoot + '**/*.ts';

var ImageDirectoryRoot = AssetsRoot + 'img/';

var ViewsRoot = AppRoot + 'views/';
var ViewsSharedRoot = ViewsRoot + 'shared/';

var HtmlFiles = AppRoot + '**/*.html';