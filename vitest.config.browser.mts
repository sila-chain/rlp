import { playwright } from '@vitest/browser-playwright'
import { defineConfig, mergeConfig } from 'vitest/config'

const baseConfig = defineConfig({
  test: {
    browser: {
      enabled: true,
      headless: true,
      fileParallelism: false,
      provider: playwright(),
      instances: [
        {
          browser: 'chromium',
          headless: true,
          isolate: true,
        },
      ],
    },
    maxConcurrency: 1
  },
  resolve: {
    conditions: ['typescript'],
  },
  optimizeDeps: {
    exclude: ['kzg-wasm'],
  },
})

export default mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      include: ['test/**/*.spec.ts'],
      silent: true,
      exclude: ['test/cli.spec.ts'],
      testTimeout: 180000,
    },
  }),
)
