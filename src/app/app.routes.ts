import { provideRouter, RouterConfig } from '@angular/router';
import { RootComponent } from './+root';
import { GameComponent } from './+game';

export const routes: RouterConfig = [
 { path: 'game', component: GameComponent },
 { path: '', component: RootComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes) 
];