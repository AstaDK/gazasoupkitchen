import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaBluesky, FaSquareFacebook } from 'react-icons/fa6';
import { LiaHandHoldingUsdSolid, LiaHandshakeSolid } from 'react-icons/lia';
import { PiHandHeart } from 'react-icons/pi';

export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const CHILDRENSERVED = 1432805;

export const NAVIGATIONS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Donate', href: '/donate' },
  { label: 'Media', href: '/media' },
  { label: 'Events', href: '/event' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIALS = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/alkabeer.alhani',
    icon: FaSquareFacebook,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gazasoupkitchen/',
    icon: FaInstagramSquare,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/gaza-soup-kitchen/',
    icon: FaLinkedin,
  },
  {
    name: 'Bluesky',
    href: 'https://bsky.app/profile/gazasoupkitchen.bsky.social',
    icon: FaBluesky,
  },
];

export const INVOLVED_ITEMS = [
  {
    id: 1,
    title: 'Make Donation',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: PiHandHeart,
  },
  {
    id: 2,
    title: 'Become A Volunteer',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: LiaHandshakeSolid,
  },
  {
    id: 3,
    title: 'Sponsorship',
    description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    icon: LiaHandHoldingUsdSolid,
  },
];

export const LATEST_DONATIONS = [
  {
    id: 1,
    name: 'Ivan Jacobson',
    amount: 300,
    cause: 'Children Needs Food',
    img: '/person_1.jpg',
    timestamp: '2024-05-01T12:00:00Z',
  },
  {
    id: 2,
    name: 'Ivan Jacobson',
    amount: 150,
    cause: 'Children Needs Food',
    img: '/person_2.jpg',
    timestamp: '2024-01-02T12:00:00Z',
  },
  {
    id: 3,
    name: 'Ivan Jacobson',
    amount: 250,
    cause: 'Children Needs Food',
    img: '/person_3.jpg',
    timestamp: '2024-01-03T12:00:00Z',
  },
];

export const GALLERIES = [
  '/image_1.jpg',
  '/image_2.jpg',
  '/image_3.jpg',
  '/cause-2.jpg',
  '/cause-3.jpg',
  '/cause-4.jpg',
  '/cause-5.jpg',
  '/cause-6.jpg',
];

export const ABOUT = [
  'Chef Mahmoud, who always ended his videos by thanking his friends in the United States and signing off with the Arabic word “Mostamreen” (مستمرين) 💪, meaning “we will continue,” left a legacy of resilience and hope.His spirit lives on through our family and friends who now manage the different locations for us across North and South Gaza.',
  'This morning, two of our dedicated crew members in North Gaza served hot meals to those in need—pasta 🍝 at one location and Palestinian Maftool 🍲 at another.These two locations, roughly two miles apart, reflect the strength of our shared mission.',
];

export const MEDIAS = [
  {
    image: '/Gaza-Soup-Kitchen.webp',
    url: 'https://www.npr.org/2024/03/03/1235606468/in-north-gaza-a-local-soup-kitchen-tries-to-compensate-for-hunger-amid-dwindling',
  },
  {
    image: '/Gaza-Soup-Kitchen-2.webp',
    url: 'https://www.npr.org/2024/07/16/nx-s1-5025629/a-palestinian-american-raises-more-than-1-million-to-feed-his-family-and-others-in-gaza',
  },
  {
    image: '/Gaza-Soup-Kitchen-3.webp',
    url: '/',
  },
];
