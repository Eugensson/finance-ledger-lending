import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

const config = defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      }),
    ],
    base: '/finance-ledger-lending/'
  };
});

export default config;