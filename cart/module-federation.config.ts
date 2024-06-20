import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'cart',
  exposes: {
    './Routes': 'cart/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
