import { provideRouter, RouterConfig } from '@angular/router';
import { RootComponent } from './+root';
import { NewGameComponent } from './+new-game';

export const routes: RouterConfig = [
 { path: 'game', component: NewGameComponent },
 { path: '', component: RootComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes) 
];