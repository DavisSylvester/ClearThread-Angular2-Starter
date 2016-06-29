export class GulpConfig {

    AppRoot: string;
    BuildRoot: string;
    AssetsRoot: string;

    IndexFileName: string;
    IndexFile: string;

    LessRoot: string;
    LessCompileFiles: string;
    LessIncludeFiles: string;
    All_LESS_File = [ ];

    CSSRoot;
    CSSFiles: string;
    CSSMapRoot: string;

    TypeScriptFiles: string;
    TypeScriptCompiledFiles: string;

    HtmlFiles: string;

    constructor(appRootDirectory: string) {
        this.AppRoot =  appRootDirectory;
        this.BuildRoot = "../build/";
        this.AssetsRoot = `${this.AppRoot}/assets/`;

        this.IndexFileName = "index.html";
        this.IndexFile = `${this.AppRoot}/${this.IndexFileName}`;

        this.LessRoot = `${this.AssetsRoot}/less/`;
        this.LessCompileFiles = `${this.LessRoot}/*.less`;
        this.LessIncludeFiles = `${this.LessRoot}/includes/*.less`;
        this.All_LESS_File = [this.LessCompileFiles, this.LessIncludeFiles];

        this.CSSRoot = `${this.AssetsRoot}/css/`;
        this.CSSFiles =`${this.CSSRoot}/*.css`;
        this.CSSMapRoot = `${this.CSSRoot}`;

        this.TypeScriptFiles = `${this.AssetsRoot}/ts/**/*.ts`;
        this.TypeScriptCompiledFiles =  `${this.AssetsRoot}/js/`;

        this.HtmlFiles = `${this.AppRoot}/**/*.html`;

    }

}