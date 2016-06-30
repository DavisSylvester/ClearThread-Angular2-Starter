import { bootstrap }    from "@angular/platform-browser-dynamic";
import { HTTP_PROVIDERS } from "@angular/http";
import { CoreComponent } from "./CoreComponent";
import { APP_ROUTER_PROVIDERS } from "./app.routes";
import { DeploymentService } from "./Services/DeploymentService";



bootstrap(CoreComponent,
    [ HTTP_PROVIDERS,  APP_ROUTER_PROVIDERS, DeploymentService ]
).catch(err => console.error(err));