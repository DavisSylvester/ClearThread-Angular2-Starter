import { RouterConfig } from "@angular/router";
import { CoreComponent } from "../CoreComponent";
import { DashboardComponent } from "../../Dashboard/Components/dashboardcomponent";




export const NavigationRoutes: RouterConfig = [
  { path: "test", component: CoreComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: '/dashboard', pathMatch: 'full'}

];