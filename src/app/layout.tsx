import { fetchGlobalData } from '@/api';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import Navbar from '../components/navbar';
import { openSans } from './fonts';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Gaza Soup Kitchen - Humanitarian Food Aid',
    description:
      'Providing emergency food relief and support in Gaza. Gaza Soup Kitchen distributes meals to those in need during crisis.',
    applicationName: 'Gaza Soup Kitchen',
    authors: [{ name: 'Gaza Soup Kitchen' }],
    keywords: [
      'Gaza Food Aid',
      'Humanitarian Relief',
      'Food Distribution',
      'Emergency Support',
      'Palestine Aid',
      'Food Security',
      'Humanitarian Crisis',
      'Food Assistance',
      'Aid Organization',
      'Emergency Relief',
    ],
    generator: 'Gaza Soup Kitchen',
    creator: 'Gaza Soup Kitchen',
    publisher: 'Gaza Soup Kitchen',
    twitter: {
      card: 'summary_large_image',
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await fetchGlobalData();

  if (!data) return null;

  return (
    <html lang="en">
      <body className={`${openSans} antialiased`}>
        <Navbar navbar={data.navbar} />
        {children}
        <Footer footer={data.footer} />
      </body>
    </html>
  );
}
