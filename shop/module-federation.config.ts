import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shop',
  exposes: {
    './Routes': 'shop/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
