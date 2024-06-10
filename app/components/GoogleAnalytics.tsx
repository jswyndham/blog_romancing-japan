import Script from 'next/script';

interface GoogleAnalyticsProps {
	trackingId?: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({
	trackingId,
}) => {
	if (!trackingId) {
		console.warn('Google Analytics tracking ID is missing');
		return null;
	}

	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</>
	);
};
