import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
    site: 'https://hunde.utjeha.me/',
    integrations: [
        tailwind(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
})
