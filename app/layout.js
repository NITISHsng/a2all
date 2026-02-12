import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";
import SocialSidebar from "./components/SocialSidebar";
import ConnectPopup from "./components/ConnectPopup";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.a2all.in'),
  title: {
    default: 'A2All - Digital Growth Agency | Affordable Marketing for Local Business',
    template: '%s | A2All Digital Agency'
  },
  description: 'Complete digital marketing solutions for shops, clinics, gyms, and small businesses. Social media, video, and websites starting at ₹3000/year. Boost your local presence today.',
  keywords: ['Digital Marketing', 'Web Development', 'SEO', 'Social Media Marketing', 'Local Business Marketing', 'Small Business Growth', 'Affordable Marketing', 'India', 'A2All', 'AtoAll'],
  authors: [{ name: 'A2All Team' }],
  creator: 'A2All',
  publisher: 'A2All',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.a2all.in',
    languages: {
      'en-US': 'https://www.a2all.in',
      'en-IN': 'https://www.a2all.in',
    },
  },
  openGraph: {
    title: 'A2All - Digital Growth Agency',
    description: 'Affordable digital marketing and web development solutions for local businesses. Start growing your business today.',
    url: 'https://www.a2all.in',
    siteName: 'A2All Digital Agency',
    images: [
      {
        url: '/a2alllogo.png',
        width: 800,
        height: 600,
        alt: 'A2All Digital Agency Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A2All - Digital Growth Agency',
    description: 'Affordable digital marketing and web development solutions for local businesses.',
    images: ['/a2alllogo.png'],
  },
  icons: {
    icon: '/a2alllogo.png',
    shortcut: '/a2alllogo.png',
    apple: '/a2alllogo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/a2alllogo.png',
    },
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        <ConnectPopup />
        <SocialSidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
