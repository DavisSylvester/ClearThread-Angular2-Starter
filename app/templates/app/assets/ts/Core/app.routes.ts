import { provideRouter, RouterConfig }  from '@angular/router';
import { NavigationRoutes } from './Routes/navigationRoutes';


let routes = [];


routes.push(...NavigationRoutes);
// routes.push(...OtherRoutes);

console.log(routes);


export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
