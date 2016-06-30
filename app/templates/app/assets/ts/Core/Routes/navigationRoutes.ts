import { RouterConfig } from "@angular/router";
import { CoreComponent } from "../CoreComponent";
import { DashboardComponent } from "../../Dashboard/Components/dashboardcomponent";




export const NavigationRoutes: RouterConfig = [
  { path: "", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent }

];