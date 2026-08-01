import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moe Kyaw Aung | Senior Android Developer',
  description: 'Portfolio of Moe Kyaw Aung — Senior Android Developer specializing in Kotlin, Jetpack Compose, Clean Architecture, and AI-powered mobile applications.',
  keywords: [
    'Moe Kyaw Aung',
    'Android Developer',
    'Kotlin',
    'Jetpack Compose',
    'Mobile Developer',
    'Myanmar',
    'Thailand',
  ],
  authors: [{ name: 'Moe Kyaw Aung' }],
  creator: 'Moe Kyaw Aung',
  openGraph: {
    title: 'Moe Kyaw Aung | Senior Android Developer',
    description: 'Building high-performance Android applications with modern architectures.',
    url: 'https://moekyawaung.dev',
    siteName: 'Moe Kyaw Aung Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moe Kyaw Aung | Senior Android Developer',
    description: 'Building high-performance Android applications with modern architectures.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-dark-bg text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
