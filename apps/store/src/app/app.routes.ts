import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

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
    path: 'product',
    component: WebComponentWrapper,
    data: {
      remoteEntry: `http://localhost:4204/remoteEntry.js`,
      remoteName: 'product_mfe',
      exposedModule: './Module',
      elementName: 'product-mfe',
    } as WebComponentWrapperOptions,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
