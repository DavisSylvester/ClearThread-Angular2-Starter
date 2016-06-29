import { Environments } from "../Environments";
import { Dictionary } from "../../Utils/Dictionary";

const API_URL_DEV = "http://localhost:3551/api/";
const API_URL_PROD = "http://production-local:3551/api/";
const API_URL_LOCAL = "http://localhost:51671/api/";

export class DeploymentService {

    private Environment: Environments;

    private EnvironmentSettings: Array<Dictionary<string, Array<Dictionary<string, string>>>>;
    private DevConfig: Array<Dictionary<string, string>>;
    private ProdConfig: Array<Dictionary<string, string>>;
    private LocalConfig: Array<Dictionary<string, string>>;

    public Config: Array<Dictionary<string, string>>;
    


    constructor() {
        this.Environment = Environments.LOCAL;

        this.EnvironmentSettings = this.setEnvironmentSetting();

        this.setEnvironments(this.Environment);
        this.Config = this.doMe();
    }

    private doMe():Array<Dictionary<string, string>>
    {
        this.Environment = Environments.DEV;

        this.EnvironmentSettings = this.setEnvironmentSetting();

        this.setEnvironments(this.Environment);
        console.log(this.Config);
        return this.Config;
    }

    private setDevConfig(): Array<Dictionary<string, string>> {
        let config = new Array<Dictionary<string, string>>();

        let apiURL = new Dictionary<string, string>("apiURL",
            API_URL_DEV);
        
        config.push(apiURL);

        this.DevConfig = config;

        return config;
    }

    private setProdConfig(): Array<Dictionary<string, string>> {
        let config = new Array<Dictionary<string, string>>();

        let apiURL = new Dictionary<string, string>("apiURL",
            API_URL_PROD);

        config.push(apiURL);

        this.ProdConfig = config;

        return config;
    }

    private setLocalConfig(): Array<Dictionary<string, string>> {
        let config = new Array<Dictionary<string, string>>();

        let apiURL = new Dictionary<string, string>("apiURL",
            API_URL_LOCAL);

        config.push(apiURL);

        this.LocalConfig = config;

        return config;
    }

    private setEnvironmentSetting(): Array<Dictionary<string, Array<Dictionary<string, string>>>> {

        let config = new Array<Dictionary<string, Array<Dictionary<string, string>>>>();

        let devConfig = new Dictionary<string, Array<Dictionary<string, string>>>("dev", this.setDevConfig());

        let prodConfig = new Dictionary<string, Array<Dictionary<string, string>>>("prod", this.setProdConfig());

        config.push(devConfig);
        config.push(prodConfig);

        return config;
    }

    private setEnvironments(environment: Environments): void {
        switch (environment) {
            case Environments.DEV:
                this.Config = this.DevConfig;
                break;

            case Environments.PROD:
                this.Config = this.ProdConfig;
                break;

            case Environments.LOCAL:
                this.Config = this.DevConfig;
                break;

            default:
                this.Config = this.DevConfig;
                break;
        }
    }

}