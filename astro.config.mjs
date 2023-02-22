import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import astroI18next from 'astro-i18next'

export default defineConfig({
    site: 'https://hunde.utjeha.me/',
    integrations: [
        tailwind(),
        astroI18next(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
})
