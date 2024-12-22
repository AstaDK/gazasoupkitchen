import { fetchGlobalData } from '@/api';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from '../components/navbar';
import './globals.css';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await fetchGlobalData();

  const title = data.title;
  const description = data.description;

  return {
    title: {
      default: title,
      template: `%s | ${title}`,
    },
    description,
    applicationName: 'Gaza Soup Kitchen',
    authors: [
      {
        name: 'Gaza Soup Kitchen',
        url: 'https://gazasoupkitchen.com/about',
      },
    ],
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
    openGraph: {
      title,
      description,
      url: 'https://gazasoupkitchen.com',
      siteName: title,
      images: [
        {
          url: 'https://gazasoupkitchen.com/favicon-32x32.png',
          alt: 'Gaza Soup Kitchen',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'non-profit',
    creator: 'Gaza Soup Kitchen',
    publisher: 'Gaza Soup Kitchen',
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
