import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaBluesky, FaSquareFacebook } from 'react-icons/fa6';
import { LiaHandHoldingUsdSolid, LiaHandshakeSolid } from 'react-icons/lia';
import { PiHandHeart } from 'react-icons/pi';

export const DONATION_URL = 'https://givebutter.com/gaza-soup-kitchen';
export const DONATION_URL2 = 'https://donatestock.com/gaza-soup-kitchen';
export const BLUR_DATA_URL =
  'data:image/webp;base64,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},GhTuHMHFIQb2sPcAFYqOZw1pDdR5Olna8DmApcEzfI4gUARSa4RORp0Lz4eBtAAekKot7eYM9H94bcw6izgCmwS4k+4SYLK7d1Y3AxvAMeKbzPygzXjX6AIA0pTFB4IAKCNTQ098xwBqQAAAAADCLhoAAAAAA==';
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

export const EVENTS = [
  {
    image: '/gaza-kids.webp',
    date: 'Jan. 15, 2024',
    title: 'Tech Trends 2024',
    time: '9:00AM-5:00PM',
    venue: 'Tech Hub Convention Center',
    description: 'Discover the latest innovations in AI, robotics, and blockchain at our annual tech summit.',
    link: DONATION_URL,
  },
  {
    image: '/gaza-kids.webp',
    date: 'Feb. 20, 2024',
    title: 'Art in the Digital Age',
    time: '1:00PM-6:00PM',
    venue: 'Downtown Gallery',
    description: 'An exploration of how technology is shaping the future of art and creativity.',
    link: DONATION_URL,
  },
  {
    image: '/gaza-kids.webp',
    date: 'Mar. 5, 2024',
    title: 'Health and Wellness Expo',
    time: '10:00AM-4:00PM',
    venue: 'City Sports Arena',
    description: 'Join us for a day dedicated to health, fitness, and mental well-being with workshops and activities.',
    link: DONATION_URL,
  },
];

export const HELPS = [
  {
    image: '/food1.webp',
    title: 'A RECIPE FOR RESILIENCE',
    description:
      "This isn't just a soup — it's a recipe for resilience, simmering on the stoves of Gaza, feeding bodies and souls alike. Each bowl serves not just sustenance but a steadfast vow: to fortify, to nourish, to endure.",
  },
  {
    image: '/food2.webp',
    title: 'HANDS UNITED IN SERVICE',
    description:
      'Amidst the steam of hearty soups, we find the warmth of shared hope. Every ladleful carries the spirit of community and the promise of sustenance for the children of Gaza.​',
  },
  {
    image: '/food3.webp',
    title: 'THE WARMTH OF SHARED HOPE​',
    description:
      'In the quiet corners of resilience, even the smallest hands come together to lift more than just a meal — they raise the foundation of tomorrow on the strength of solidarity.​',
  },
  {
    image: '/food4.webp',
    title: 'NURTURING COMMUNITY​',
    description:
      'This is where hope simmers, where every serving is a pledge of solidarity. Here, we do not just feed the hungry, we nurture the soul of Gaza, one pot, one person, one community at a time.​',
  },
];

export const GALLERIES_PAGE = [
  { src: '/bg_3.jpg', width: 1920, height: 1080, alt: 'Background scene' },
  { src: '/bg_4.jpg', width: 1920, height: 1080, alt: 'Alternative background' },
  { src: '/cause-2.jpg', width: 1200, height: 800, alt: 'Charitable cause' },
  { src: '/cause-3.jpg', width: 1200, height: 800, alt: 'Community support initiative' },
  { src: '/cause-4.jpg', width: 1200, height: 800, alt: 'Humanitarian effort' },
  { src: '/cause-5.jpg', width: 1200, height: 800, alt: 'Social impact project' },
  { src: '/cause-6.jpg', width: 1200, height: 800, alt: 'Volunteer work' },
  { src: '/food.webp', width: 1000, height: 667, alt: 'Food distribution' },
  { src: '/food1.webp', width: 1000, height: 667, alt: 'Meal preparation' },
  { src: '/food2.webp', width: 1000, height: 667, alt: 'Cooking for community' },
  { src: '/food3.webp', width: 1000, height: 667, alt: 'Community kitchen' },
  { src: '/food4.webp', width: 1000, height: 667, alt: 'Feeding program' },
  { src: '/gaza-kid.webp', width: 800, height: 600, alt: 'Child in Gaza' },
  { src: '/gaza-kids.webp', width: 800, height: 600, alt: 'Children in Gaza' },
  { src: '/Gaza-Soup-Kitchen-2.webp', width: 1200, height: 800, alt: 'Soup kitchen scene' },
  { src: '/Gaza-Soup-Kitchen-3.webp', width: 1200, height: 800, alt: 'Community soup kitchen' },
  { src: '/Gaza-Soup-Kitchen.webp', width: 1200, height: 800, alt: 'Humanitarian soup kitchen' },
  { src: '/gazasoup-logo.webp', width: 500, height: 500, alt: 'Gazasoup organization logo' },
  { src: '/image_1.jpg', width: 1600, height: 1067, alt: 'Descriptive image one' },
  { src: '/image_2.jpg', width: 1600, height: 1067, alt: 'Descriptive image two' },
  { src: '/image_3.jpg', width: 1600, height: 1067, alt: 'Descriptive image three' },
  { src: '/mission-1024x864.webp', width: 800, height: 600, alt: 'Child portrait' },
  { src: '/kids.webp', width: 800, height: 600, alt: 'Group of children' },
  { src: '/MAHMOUD-ALMADHOUN.webp', width: 800, height: 600, alt: 'Mahmoud Almadhoun' },
  { src: '/merch.webp', width: 1000, height: 1000, alt: 'Merchandise display' },
];

export const MEDIAS_PAGE = [
  {
    src: '/media/ajnews.png',
    href: 'https://x.com/ajplus/status/1836828710978097187?t=N3SBlDhhJhQGNPsaTFoZlQ&s=08',
    width: 800,
    height: 600,
    alt: 'AJ News',
  },
  {
    src: '/media/ajwhite-768x776.png',
    href: 'https://www.youtube.com/shorts/0XfYudScK1o',
    width: 768,
    height: 776,
    alt: 'AJ White',
  },
  {
    src: '/media/cbc-768x771.jpg',
    href: 'https://www.cbc.ca/listen/live-radio/1-14-day-6/clip/16051274-a-local-soup-kitchen-gaza-helps-people-facing',
    width: 768,
    height: 771,
    alt: 'CBC',
  },
  {
    src: '/media/DC-News-Now-768x765.jpg',
    href: 'https://www.dcnewsnow.com/news/local-news/virginia/northern-virginia-man-raising-money-for-familys-soup-kitchen-in-north-gaza/',
    width: 768,
    height: 765,
    alt: 'DC News Now',
  },
  {
    src: '/media/FinancialTimes-768x748.jpg',
    href: 'https://www.ft.com/content/07081b5e-edbc-4e61-93f1-390e14cf6f09',
    width: 768,
    height: 748,
    alt: 'Financial Times',
  },
  {
    src: '/media/foodbeast-768x761.png',
    href: 'https://www.foodbeast.com/news/brothers-launch-gaza-soup-kitchen-aiding-hundreds-of-families-during-ramadan/',
    width: 768,
    height: 761,
    alt: 'Foodbeast',
  },
  {
    src: '/media/nbc-768x705.png',
    href: 'https://www.nbcnews.com/news/world/ramadan-gaza-palestinians-israel-war-famine-rcna142785',
    width: 768,
    height: 705,
    alt: 'NBC',
  },
  {
    src: '/media/nbc2-768x736.png',
    href: 'https://www.nbcnews.com/news/world/gaza-soup-kitchen-bridges-efforts-brothers-thousands-miles-apart-rcna146593',
    width: 768,
    height: 736,
    alt: 'NBC 2',
  },
  {
    src: '/media/npr-768x774.png',
    href: 'https://www.npr.org/2024/07/16/nx-s1-5025629/a-palestinian-american-raises-more-than-1-million-to-feed-his-family-and-others-in-gaza',
    width: 768,
    height: 774,
    alt: 'NPR',
  },
  {
    src: '/media/npr-768x766.png',
    href: 'https://www.npr.org/2024/03/03/1235606468/in-north-gaza-a-local-soup-kitchen-tries-to-compensate-for-hunger-amid-dwindling',
    width: 768,
    height: 766,
    alt: 'NPR',
  },
  {
    src: '/media/pbs-768x775.png',
    href: 'https://www.pbs.org/newshour/show/gazans-struggle-with-starvation-and-displacement-this-ramadan',
    width: 768,
    height: 775,
    alt: 'PBS',
  },
  {
    src: '/media/wapo-768x890.png',
    href: 'https://www.washingtonpost.com/opinions/2024/04/03/gaza-famine-family-soupkitchen/',
    width: 768,
    height: 890,
    alt: 'Washington Post',
  },
  {
    src: '/media/yahoo-768x733.png',
    href: 'https://www.yahoo.com/news/gaza-soup-kitchen-bridges-efforts-212433065.html',
    width: 768,
    height: 733,
    alt: 'Yahoo',
  },
  {
    src: '/media/Ziet-768x773.jpg',
    href: 'https://www.zeit.de/politik/ausland/2024-05/gaza-middle-east-war-humanitarian-situation-israel-aid-organization/komplettansicht',
    width: 768,
    height: 773,
    alt: 'Ziet',
  },
];

export const ABOUT_PAGE = [
  "My name is Hani Almadhoun, and I've seen firsthand what it's like for family and friends in Gaza to suffer from hunger due to the blockade. This personal experience opened my eyes to the dire situation we face every day. It's why we couldn't stay idle. The pain of watching loved ones struggle to find their next meal became the driving force behind our mission.",
  "Our goal is clear: to ensure no one in our community goes to bed hungry. This is more than just an initiative, it's a personal vow.",
  'Hani Almadhoun',
];
