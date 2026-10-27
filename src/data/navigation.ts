export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
  isCta?: boolean;
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about/story", description: "How God birthed this movement across Ethiopia" },
      { label: "Vision & Mission", href: "/about/vision-mission", description: "Equipping churches to reach the least-reached" },
      { label: "Leadership", href: "/about/leadership", description: "Servant leaders and advisory council" },
      { label: "Partners", href: "/about/partners", description: "Partnering denominations, networks & fellowships" },
    ],
  },
  {
    label: "Why Least-Reached",
    href: "/why-least-reached/one-third",
    children: [
      { label: "One Third", href: "/why-least-reached/one-third", description: "Why we focus on communities with zero access" },
      { label: "Our Approach", href: "/approach", description: "The 5-stage multiplying church model" },
      { label: "Our Beginnings", href: "/about/story", description: "Our history & founding vision" },
    ],
  },
  {
    label: "Our Approach",
    href: "/approach",
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Discipleship-Mission Training", href: "/programs/discipleship", description: "Equipping disciples to plant fellowships in unreached areas" },
      { label: "Small Business Development", href: "/programs/small-business", description: "Tentmaking sustainability for frontline workers" },
      { label: "Leadership Development", href: "/programs/leadership", description: "Fostering servant leaders for multiplying movements" },
      { label: "Church Multiplication", href: "/programs/church-multiplication", description: "Partnering with cluster churches to launch new fellowships" },
    ],
  },
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Pray With Us", href: "/get-involved/pray", description: "Join our intercession network for least-reached peoples" },
      { label: "Sign the Pledge", href: "/get-involved/pledge", description: "Commit to reaching the least-reached" },
      { label: "Partner as a Church", href: "/get-involved/partner", description: "Equip your congregation for cross-cultural mission" },
      { label: "Serve & Volunteer", href: "/get-involved/volunteer", description: "Use your skills to advance the kingdom" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Give",
    href: "/give",
    isCta: true,
  },
];

export const FOOTER_LINKS = {
  about: [
    { label: "Our Story", href: "/about/story" },
    { label: "Vision & Mission", href: "/about/vision-mission" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Church Partners", href: "/about/partners" },
    { label: "Why Least-Reached", href: "/why/least-reached" },
    { label: "Ethiopia Context", href: "/why/ethiopia-context" },
  ],
  explore: [
    { label: "Our Approach", href: "/approach" },
    { label: "Discipleship Training", href: "/programs/discipleship" },
    { label: "Small Business Training", href: "/programs/small-business" },
    { label: "Leadership Training", href: "/programs/leadership" },
    { label: "Stories & Testimonies", href: "/stories" },
    { label: "Conferences & Events", href: "/events" },
    { label: "Resource Library", href: "/resources" },
  ],
  getInvolved: [
    { label: "Pray for the Frontline", href: "/get-involved/pray" },
    { label: "Sign the Pledge", href: "/get-involved/pledge" },
    { label: "Church Partnership", href: "/get-involved/partner" },
    { label: "Serve & Volunteer", href: "/get-involved/volunteer" },
    { label: "Support Frontline Workers", href: "/give" },
    { label: "Telebirr & CBE Birr Giving", href: "/give#bank-details" },
    { label: "Frequently Asked Questions", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Financial Accountability", href: "/give#transparency" },
    { label: "Contact Us", href: "/contact" },
  ],
};
