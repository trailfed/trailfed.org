import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TrailFed — federated geo-social for travellers',
  description:
    'Open, self-hosted federation of places, check-ins and travel tracks — ActivityPub + OpenStreetMap, built for van-lifers, overlanders, sailors, cyclists, anglers, hikers and digital nomads.',
  openGraph: {
    title: 'TrailFed',
    description: 'Federated geo-social protocol for travellers.',
    url: 'https://trailfed.org',
    siteName: 'TrailFed',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
