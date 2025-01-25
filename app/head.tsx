export function Head() {
	const homePageJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'Romancing Japan',
		url: 'https://www.romancing-japan.com/',
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://www.romancing-japan.com/search?query={search_term_string}',
			'query-input': 'required name=search_term_string',
		},
		description:
			'Informative Articles about Japanese travel, lifestyle, and culture. For those who wish to learn more about Japan and its culture.',
		publisher: {
			'@type': 'Organization',
			name: 'Romancing Japan',
			logo: {
				'@type': 'ImageObject',
				url: 'https://www.romancing-japan.com/logo.png',
			},
		},
	};

	return (
		<>
			{/* Google Tag Manager Script */}
			{/* Google Tag Manager Script */}
			<script
				dangerouslySetInnerHTML={{
					__html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id=GTM-T4C8LM3W';
                        f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-T4C8LM3W');
                    `,
				}}
			></script>

			{/* Meta tags not covered by the metadata object */}
			<meta
				name="facebook-domain-verification"
				content="j3hoqq9m2dclmb7l7yvtcu08ptvlsn"
			/>
			<meta
				name="google-adsense-account"
				content="ca-pub-1847015508086202"
			/>
			<meta
				name="p:domain_verify"
				content="d485f2d6f7eae98e421fe5adedc1225c"
			/>

			{/* JSON-LD structured data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(homePageJsonLd),
				}}
			/>
		</>
	);
}
