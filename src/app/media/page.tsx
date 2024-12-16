import BlurredBgComponent from '@/components/blurred-bg';
import { ColumnLayout } from '@/components/column-layout';
import { BLUR_DATA_URL, MEDIAS_PAGE } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';

export default function MediaPage() {
  return (
    <>
      <BlurredBgComponent
        img="/food.webp"
        heroText="THE LATEST NEWS, STORIES, AND MULTIMEDIA CONTENT ABOUT OUR MISSION TO COMBAT HUNGER AND PROVIDE NOURISHMENT TO THE PEOPLE OF GAZA."
      />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 py-3">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4">
          {MEDIAS_PAGE.map((image) => (
            <div key={image.src} className="break-inside-avoid mb-4 relative group">
              <Link href={image.href} target="_blank">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                />
              </Link>
            </div>
          ))}
        </div>
        <p className="text-lg text-black text-center">
          Stay informed and inspired by following our journey, and join us in spreading awareness and fostering hope.
          For media inquiries or to request interviews, please contact our communications team. Thank you for your
          interest and support!
        </p>
        <ColumnLayout
          headline="URGENT CALL FOR SUPPORT: PALESTINIANS IN GAZA NEED YOUR HELP NOW"
          paragraphs={[
            'Your support fuels our mission. Every donation brings us closer to a hunger-free Gaza',
            'The people of Gaza are counting on you. Together, we can provide hope and relief to those who need it most. This is an urgent call—your support today will have a lasting impact on their lives.',
          ]}
          imageSrc="/mission-1024x864.webp"
          imageAlt="kid in gaza"
          mission
        />
      </div>
    </>
  );
}
