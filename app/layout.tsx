import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Roboto_Condensed,
  Playfair_Display,
  Krona_One,
  Shadows_Into_Light,
  Delicious_Handrawn,
  Carter_One,
  Caveat,
} from "next/font/google";

// Font settings
const roboto_condensed = Roboto_Condensed({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
});

const playfair_display = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair_display",
});

const krona_one = Krona_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-krona_one",
});

const shadows_into_light = Shadows_Into_Light({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-shadows_into_light",
});

const delicious_handrawn = Delicious_Handrawn({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-delicious_handraw",
});

const carter_one = Carter_One({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-carter_one",
});

const caveat = Caveat({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata = {
  metadataBase: new URL("https://www.romancing-japan.com"),
  title: {
    default: "Romancing Japan - Travel, Lifestyle, Culture, Cooking",
    template: `%s | Romancing Japan`,
  },
  description:
    "Articles about Japanese travel, lifestyle, culture, and cooking. For those who wish to learn more about Japan and its culture.",
  keywords: [
    "Japan",
    "Travel in Japan",
    "Japanese Culture",
    "Japanese Lifestyle",
    "Lifestyle in Japan",
    "Living in Japan",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true },
    bingbot: { index: true, follow: true },
  },
  openGraph: {
    title: {
      default: "Romancing Japan - Travel, Lifestyle, Culture, Cooking",
      template: `%s | Romancing Japan`,
    },
    description:
      "Articles about Japanese travel, lifestyle, culture, and cooking. For those who wish to learn more about Japan and what goes on there.",
    type: "website",
    siteName: "Romancing Japan",
    url: "http://www.romancing-japan.com",
  },
  // verification: {
  //   google: "",
  // }
};

// Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto_condensed.variable} ${playfair_display.variable} ${krona_one.variable} ${shadows_into_light.variable} ${delicious_handrawn.variable} ${carter_one.variable} ${caveat.variable}`}
    >
      <body className="bg-gray-200">
        {/* <Header /> */}
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
