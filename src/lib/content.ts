/** All copy + links from the original homepage draft, kept out of the JSX. */

export const SITE = "https://www.threadsandarts.com";

export const links = {
  login: `${SITE}/login.php`,
  contact: "/contactus",
  portfolio: "/portfolio",
  privacy: `${SITE}/privacy-policy`,
  terms: `${SITE}/terms-of-use`,
  email: "admin@threadsandarts.com",
  sampleMail:
    "mailto:admin@threadsandarts.com?subject=Free%20sample%20request&body=Hello%20Threads%20%26%20Arts%2C%0A%0AI%27d%20like%20to%20request%20a%20free%20sample.%0A%0ADesign%20size%3A%0AFabric%20or%20product%3A%0AFile%20format%3A%0A%0AI%20will%20attach%20my%20artwork.",
} as const;

/** Every service page (also the Services dropdown). */
export const servicePages = [
  { label: "Vector Arts", title: "Vector Arts", href: "/vectorization-services" },
  { label: "Logo Embroidery Digitizing", title: "Logo Embroidery Digitizing", href: "/logo-embroidery-digitizing-services" },
  { label: "3D Puff Embroidery Digitizing", title: "3D Puff Embroidery Digitizing", href: "/3D-puff-embroidery-digitizing-services" },
  { label: "Gloves Embroidery Digitizing", title: "Gloves Embroidery Digitizing", href: "/glove-embroidery-digitizing-services" },
  { label: "Sleeves Embroidery Digitizing", title: "Sleeves Embroidery Digitizing", href: "/sleeve-embroidery-digitizing-services" },
  { label: "Towel Embroidery Digitizing", title: "Towel Embroidery Digitizing", href: "/towel-embroidery-digitizing-services" },
  { label: "Hat/Cap Embroidery Digitizing", title: "Hat/Cap Embroidery Digitizing", href: "/hat-embroidery-digitizing-services" },
  { label: "Embroidery Patch Digitizing", title: "Embroidery Patch Digitizing", href: "/embroidered-patch-digitizing-services" },
  { label: "Applique Digitizing", title: "Applique Digitizing", href: "/applique-embroidery-digitizing-services" },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export const nav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", children: servicePages },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Process", href: "/our-process" },
  { label: "Contact Us", href: "/contactus" },
  { label: "Blog", href: "/blog" },
];

/** Blog post ids used on the live site. */
export const blogIds = [53, 55, 56, 57, 58, 59, 60, 61] as const;

/** Other pages: not in the main nav. */
export const extraPages = [
  { label: "About Us", href: "/aboutus" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
] as const;

/** Account flow stays on the existing PHP system for now. */
export const accountPages = {
  order: `${SITE}/signup.php`,
  signup: `${SITE}/signup.php`,
  login: `${SITE}/login.php`,
} as const;

export const testimonials = [
  { quote: "Fast, friendly, and excellent quality! The patches turned out perfect, and I’ll be ordering again soon!", author: "Joseph Tiller" },
  { quote: "Very professional and reliable service. The pricing is fair, and the quality is excellent. Couldn’t be happier with my order!", author: "Lyle Ainsworth" },
  { quote: "Great experience from start to finish. The design came out exactly as I wanted, and communication was excellent throughout the process.", author: "Natalie Joseph" },
] as const;

export const promises = [
  { icon: "bolt", title: "4–6 Hours", note: "Standard turnaround" },
  { icon: "infinity", title: "Unlimited Revisions", note: "Made to meet your needs" },
  { icon: "layers", title: "Machine-Ready Files", note: "All major formats" },
  { icon: "badge", title: "Serving Since 2017", note: "Experience in every stitch" },
] as const;

export const formats = ["DST", "PES", "EXP", "JEF", "HUS", "VP3", "XXX", "PXF", "EMB", "SEW"];

export const stages = [
  { title: "Original artwork", note: "It starts with your idea.", label: "ORIGINAL ARTWORK" },
  { title: "Stitch paths", note: "Every direction has a purpose.", label: "STITCH PATHS" },
  { title: "Digitized preview", note: "Density, sequence and detail.", label: "DIGITIZED PREVIEW" },
  { title: "Finished embroidery", note: "Ready for real-world production.", label: "FINISHED EMBROIDERY" },
] as const;

export const services = [
  {
    tag: "01 / DIGITIZING",
    title: "Logo Digitizing",
    text: "Clean detail. Consistent branding.",
    image: "/assets/logo.jpg",
    alt: "Logo embroidery sample",
    href: `${SITE}/logo-embroidery-digitizing-services`,
  },
  {
    tag: "02 / DIMENSION",
    title: "3D Puff Digitizing",
    text: "Give your designs a new dimension.",
    image: "/assets/puff.jpg",
    alt: "Raised puff embroidery sample",
    href: `${SITE}/3D-puff-embroidery-digitizing-services`,
  },
  {
    tag: "03 / HEADWEAR",
    title: "Cap & Hat Digitizing",
    text: "Precision for curved surfaces.",
    image: "/assets/cap.jpg",
    alt: "Embroidered cap from existing portfolio",
    href: `${SITE}/hat-embroidery-digitizing-services`,
  },
  {
    tag: "04 / PATCHES",
    title: "Patch Digitizing",
    text: "Small details. Lasting impressions.",
    image: "/assets/patch.jpg",
    alt: "Embroidered patch example",
    href: `${SITE}/embroidered-patch-digitizing-services`,
  },
] as const;

export const portfolio = [
  {
    image: "/assets/showcase/portfolio-logo.webp",
    alt: "Embroidered logo digitizing sample",
    caption: "Logo Digitizing · Satin Column",
  },
  {
    image: "/assets/showcase/portfolio-crest.webp",
    alt: "Custom embroidered crest with tatami fill",
    caption: "Custom Crest · Tatami Fill",
  },
  {
    image: "/assets/showcase/portfolio-cap.webp",
    alt: "Detailed cap embroidery on curved surface",
    caption: "Cap Embroidery · Curved Surface",
  },
  {
    image: "/assets/showcase/portfolio-puff.webp",
    alt: "3D puff embroidery lettering",
    caption: "3D Puff · Foam Lettering",
  },
  {
    image: "/assets/showcase/portfolio-patch.webp",
    alt: "Embroidered patch with merrowed edge",
    caption: "Patch Digitizing · Merrowed Edge",
  },
  {
    image: "/assets/showcase/portfolio-jacket.webp",
    alt: "Detailed jacket back embroidery",
    caption: "Jacket Back · Large Format",
  },
  {
    image: "/assets/showcase/portfolio-polo.webp",
    alt: "Embroidered polo left chest logo",
    caption: "Left Chest · Corporate Logo",
  },
  {
    image: "/assets/showcase/portfolio-detail.webp",
    alt: "Intricate embroidery design with fine detail",
    caption: "Fine Detail · Micro Lettering",
  },
] as const;

export const steps = [
  { title: "Send your artwork", text: "Share your design, size, fabric and preferred file format." },
  { title: "We digitize", text: "We plan the stitch paths and create your embroidery file." },
  { title: "You review", text: "Check your preview and request any revisions you need." },
  { title: "Start stitching", text: "Download your finished file and bring your design to life." },
] as const;

export const stats = [
  { value: 2017, label: "Serving since", plus: false, format: false },
  { value: 400, label: "Customers served", plus: true, format: true },
  { value: 50000, label: "Designs delivered", plus: true, format: true },
] as const;

export const reasons = [
  { num: "01", title: "Fast Turnaround", icon: "clock", rotate: -3, dark: true },
  { num: "02", title: "Unlimited Revisions", icon: "loop", rotate: 2.5, dark: false },
  { num: "03", title: "All Major Formats", icon: "layers", rotate: 1, dark: false },
  { num: "04", title: "Expert Digitizers", icon: "badge", rotate: -2, dark: true },
  { num: "05", title: "50,000+ Designs", icon: "check", rotate: 3, dark: true },
] as const;

export const industries = [
  { title: "Embroidery Shops", text: "A reliable partner for your next production run." },
  { title: "Screen Printers", text: "Sharp vector artwork, ready for your workflow." },
  { title: "Promotional Products", text: "Branding for caps, bags, uniforms and more." },
  { title: "Apparel Brands", text: "Thoughtful digitizing for your next collection." },
] as const;
