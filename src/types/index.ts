export interface Story {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  location: string;
  date: string;
  category: 'Testimony' | 'Discipleship' | 'Leadership' | 'Church' | 'Community' | 'Training' | 'Partnership' | 'News';
  program_id?: string;
  video_url?: string;
  featured: boolean;
  reading_time?: string;
  quote?: string;
  gallery?: string[];
  isVerifiedPlaceholder?: boolean;
}

export interface Program {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  short_description: string;
  description: string;
  featured_image: string;
  iconName: string;
  order: number;
  featured: boolean;
  whyThisProgram: string;
  whatWeDo: string[];
  whoParticipates: string;
  trainingFormat: string;
  outcomes: string[];
  isVerifiedPlaceholder?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
  featured_image: string;
  registration_url?: string;
  status: 'Upcoming' | 'Registration Open' | 'Registration Closed' | 'Completed' | 'Cancelled';
  category: 'Conference' | 'Training' | 'Prayer Summit' | 'Partner Gathering';
  capacity?: string;
  contactEmail?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  type: 'Article' | 'Video' | 'Report' | 'PDF' | 'Guide' | 'Training Material' | 'Download';
  file_url: string;
  category: string;
  date: string;
  author: string;
  featured: boolean;
  fileSize?: string;
  downloadCount?: number;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  period: string;
  source: string;
  description: string;
  display_order: number;
  isVerified: boolean;
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  roleType: 'National Director' | 'Board of Trustees' | 'Program Coordinator' | 'Regional Field Leader' | 'Advisory';
  bio: string;
  photo: string;
  location?: string;
  isVerifiedPlaceholder?: boolean;
}

export interface PartnerChurch {
  id: string;
  name: string;
  denominationOrAlliance: string;
  region: string;
  involvement: string;
  logoText?: string;
}

export interface FAQItem {
  id: string;
  category: 'About the Alliance' | 'Programs & Training' | 'Partnership & Churches' | 'Giving & Stewardship' | 'Volunteering';
  question: string;
  answer: string;
}

export interface BankPaymentMethod {
  id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  branch?: string;
  swiftCode?: string;
  serviceType: 'Bank Transfer' | 'Telebirr' | 'CBE Birr' | 'International Wire';
  logoBadge: string;
  instructions: string;
  isOfficialPlaceholder?: boolean;
}
