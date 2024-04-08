import Script from 'next/script';
import { NEXT_PUBLIC_GOOGLE_ANALYTICS } from '../../gtag';

export const GoogleAnalytics = () => (
	<>
		<Script
			strategy="afterInteractive"
			src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
		/>
		<Script
			id="gtag-init"
			strategy="afterInteractive"
			dangerouslySetInnerHTML={{
				__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
			}}
		/>
	</>
);
