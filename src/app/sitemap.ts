import { fetchGlobalData } from '@/api';
import { Navbar } from '@/types';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const {
    data,
  }: {
    data: {
      createdAt: string;
      updatedAt: string;
      navbar: Navbar;
    };
  } = await fetchGlobalData();

  return data.navbar.link.map((link) => ({
    url: `https://gazasoupkitchen.com${link.href}`,
    lastModified: new Date(data.updatedAt),
  }));
}
