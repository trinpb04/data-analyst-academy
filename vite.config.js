import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo-mark-light.png', 'logo-mark-dark.png'],
      manifest: {
        name: 'Data Analyst Academy',
        short_name: 'DA Academy',
        start_url: '/data-analyst-academy/',
        scope: '/data-analyst-academy/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0E7C6F',
        icons: [
          { src: 'logo-mark-light.png', sizes: '192x192', type: 'image/png' },
          { src: 'logo-mark-light.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    })
  ],
  base: '/data-analyst-academy/',
})
