import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

const config = defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        /* pass your config */
      }),
    ],
    base: '/finance-ledger-lending/'
  };
});

export default config;