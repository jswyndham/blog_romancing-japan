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
	Montserrat,
} from 'next/font/google';
import dynamic from 'next/dynamic';

// Dynamic import for Navbar
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

const montserrat = Montserrat({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

// ******** Metadata API ********
export const metadata = {
	metadataBase: new URL('https://www.romancing-japan.com/'),
	title: {
		default: 'Romancing Japan - Travel, Lifestyle, Culture',
		template: `%s`,
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
	description:
		'Articles about Japanese travel, lifestyle, and culture. For those who wish to learn more about Japan and its culture.',
	keywords: [
		'Japan',
		'Travel in Japan',
		'Japan Tourism',
		'Japanese Culture',
		'Japanese Lifestyle',
		'Lifestyle in Japan',
		'Living in Japan',
		'Japanese Society',
		'Social Japan',
		'Life in Japan',
		'Moving to Japan',
		'Move to Japan',
		'Cost of Living in Japan',
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
	other: {
		'facebook-domain-verification': 'j3hoqq9m2dclmb7l7yvtcu08ptvlsn',
		'agoda-affiliate-verification': 'agd-partner-manual-verification',
		'google-adsense-account': 'ca-pub-1847015508086202',
		'p:domain_verify': 'd485f2d6f7eae98e421fe5adedc1225c',
	},
};

export const revalidate = 20; // revalidate every minute

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${roboto_condensed.variable} ${playfair_display.variable} ${krona_one.variable} ${shadows_into_light.variable} ${patrick_hand.variable} ${carter_one.variable} ${caveat.variable} ${montserrat.variable}`}
		>
			<head>
				{/* Google Tag Manager */}
				<script>
					{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCFF5T82');`}
				</script>
			</head>
			<body className="bg-base-100 w-screen overflow-x-hidden mx-auto">
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-KCFF5T82"
						className="gtm-iframe"
					></iframe>
				</noscript>
				<GoogleAnalytics
					trackingId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
				/>
				<Navbar />
				<Analytics />
				{children}

				<Footer />
			</body>
		</html>
	);
}
