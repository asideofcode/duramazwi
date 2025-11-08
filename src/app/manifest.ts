import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Shona Dictionary - Duramazwi',
    short_name: 'Shona Dictionary',
    description: 'Your comprehensive guide to the Shona language. Find accurate definitions, meanings, and examples of Shona words.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      // {
      //   src: '/favicon.ico',
      //   sizes: 'any',
      //   type: 'image/x-icon',
      // },
      // {
      //   src: '/icon',
      //   sizes: '192x192',
      //   type: 'image/png',
      // },
      // {
      //   src: '/apple-icon',
      //   sizes: '180x180',
      //   type: 'image/png',
      // },
      {
        "src": "/web-app-manifest-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable"
      },
      {
        "src": "/web-app-manifest-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      }
    ],
  }
}
