'use client';

import { useEffect } from 'react';

declare global {
	interface Window {
		adsbygoogle: any;
	}
}

interface AdSenseUnitProps {
	adClient?: string; // Optional prop for ad-client ID
	adSlot?: string; // Optional prop for ad-slot ID
}

export default function AdSenseUnit({
	adClient = 'ca-pub-1847015508086202', // Default ad-client
	adSlot = '7454156713', // Default ad-slot
}: AdSenseUnitProps) {
	// *** Prevent rendering if adClient or adSlot is missing ***
	if (!adClient || !adSlot) {
		return null; // Completely skip rendering
	}

	useEffect(() => {
		try {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		} catch (err) {
			console.error('AdSense Error:', err);
		}
	}, []);

	return (
		<ins
			className="adsbygoogle ad-container"
			data-ad-client={adClient}
			data-ad-slot={adSlot}
			data-ad-format="auto"
			data-full-width-responsive="true"
		></ins>
	);
}
