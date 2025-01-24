'use client';

import React, { useEffect } from 'react';

interface AffiliateWidgetProps {
	scriptSrc: string;
	defaultDirection?: string;
	locale?: string;
}

const AffiliateWidget: React.FC<AffiliateWidgetProps> = ({
	scriptSrc,
	defaultDirection = 'Japan',
	locale = 'en',
}) => {
	useEffect(() => {
		// Dynamically create and append the script tag
		const script = document.createElement('script');
		script.src = scriptSrc;
		script.async = true;
		script.setAttribute('data-default-direction', defaultDirection);
		script.setAttribute('data-locale', locale);

		// Append to a container div
		const container = document.getElementById('affiliate-widget-container');
		if (container) {
			container.appendChild(script);
		}

		return () => {
			// Cleanup: remove the script when the component unmounts
			if (container) {
				container.innerHTML = '';
			}
		};
	}, [scriptSrc, defaultDirection, locale]);

	return <div id="affiliate-widget-container"></div>;
};

export default AffiliateWidget;
