// app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Moe Kyaw Aung — Senior Android Developer',
    short_name: 'Moe Kyaw Aung',
    description: 'Senior Android Developer Portfolio — Kotlin, Jetpack Compose, Clean Architecture',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0F',
    theme_color: '#00E5FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
