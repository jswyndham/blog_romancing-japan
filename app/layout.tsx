import './globals.css';
import Footer from './components/Footer';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';
import {
	Roboto_Condensed,
	Playfair_Display,
	Krona_One,
	Shadows_Into_Light,
	Patrick_Hand,
	Carter_One,
	Caveat,
} from 'next/font/google';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });

// Font settings
const roboto_condensed = Roboto_Condensed({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-condensed',
});

const playfair_display = Playfair_Display({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-playfair_display',
});

const krona_one = Krona_One({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-krona_one',
});

const shadows_into_light = Shadows_Into_Light({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-shadows_into_light',
});

const patrick_hand = Patrick_Hand({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-patrick_hand',
});

const carter_one = Carter_One({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-carter_one',
});

const caveat = Caveat({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-caveat',
});

// METADATA
export const metadata = {
	metadataBase: new URL('https://www.romancing-japan.com/'),
	title: {
		default: 'Romancing Japan - Travel, Lifestyle, Culture',
		template: `%s`,
	},
	icons: {
		icon: 'favicon.ico',
	},
	description:
		'Articles about Japanese travel, lifestyle, and culture. For those who wish to learn more about Japan and its culture.',
	keywords: [
		'Japan',
		'Travel in Japan',
		'Japanese Culture',
		'Japanese Lifestyle',
		'Lifestyle in Japan',
		'Living in Japan',
		'Japanese Society',
		'Social Japan',
		'Life in Japan',
		'Moving to Japan',
	],
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: { index: true, follow: true },
	},
	openGraph: {
		title: {
			default: 'Romancing Japan - Travel, Lifestyle, Culture',
			template: `%s`,
		},
		description:
			'Articles about Japanese travel, lifestyle, and culture. For those who wish to learn more about Japan and what goes on there.',
		type: 'website',
		siteName: 'Romancing Japan',
		url: 'https://www.romancing-japan.com/',
	},
};

export const revalidate = 60; // revalidate every minute

// Layout
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${roboto_condensed.variable} ${playfair_display.variable} ${krona_one.variable} ${shadows_into_light.variable} ${patrick_hand.variable} ${carter_one.variable} ${caveat.variable}`}
		>
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			<body className="bg-base-100">
				<GoogleAnalytics />
				<Navbar />
				<Analytics />
				{children}

				<Footer />
			</body>
		</html>
	);
}
