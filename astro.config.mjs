// @ts-check
import { defineConfig, envField } from 'astro/config'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  env: {
    schema: {
      YVP_PUBLIC_APP_KEY: envField.string({ context: 'client', access: 'public', optional: false }),
    },
  },
})
