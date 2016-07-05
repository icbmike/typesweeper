import { provideRouter, RouterConfig } from '@angular/router';
//import { AboutComponent } from './+about';
import { RootComponent } from './+root';


export const routes: RouterConfig = [
 // { path: 'about', component: AboutComponent },
  { path: '', component: RootComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];