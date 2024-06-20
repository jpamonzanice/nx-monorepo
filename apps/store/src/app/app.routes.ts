import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule('cart', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'about',
    loadChildren: () =>
      loadRemoteModule('about', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
