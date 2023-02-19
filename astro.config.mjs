import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'

export default defineConfig({
    site: 'https:/utjeha-dogs.vercel.app/',
    integrations: [
        tailwind(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
})
