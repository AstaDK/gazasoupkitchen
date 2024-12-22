import { fetchDynamicPage } from '@/api';
import { SectionRenderer } from '@/components/section-renderer';
import { SectionData } from '@/types';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  const { data } = await fetchDynamicPage(slug);

  return {
    title: data?.title,
    description: data?.description,
  };
}

export default async function Dynamic({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const { data } = await fetchDynamicPage(slug);

  if (!data) return null;

  return (
    <>
      {data.sections.map((section: SectionData) => (
        <SectionRenderer key={section.__component} section={section} />
      ))}
    </>
  );
}
