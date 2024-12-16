export type Event = {
  title: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  link: string;
};

export type ColumnLayoutProps = {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  paragraphs: string[];
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  reverseOrder?: boolean;
  mission?: boolean;
};
