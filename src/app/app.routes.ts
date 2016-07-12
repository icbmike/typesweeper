import { provideRouter, RouterConfig } from '@angular/router';
import { RootComponent } from './+root';
import { GameComponent } from './+game';
import { AboutComponent } from './about';

export const routes: RouterConfig = [
 { path: 'game', component: GameComponent },
 { path: '', component: RootComponent },
 { path: 'about', component: AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes) 
];