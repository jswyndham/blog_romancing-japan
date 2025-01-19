'use client';

type FaqSchemaProps = {
	faqs: { question: string; answer: string }[];
};

export default function FaqSchema({ faqs }: FaqSchemaProps) {
	if (!faqs || faqs.length === 0) {
		return null; // Avoid rendering invalid or empty JSON-LD
	}

	const sanitizedFaqs = faqs
		.filter((faq) => faq.question && faq.answer) // Ensure valid questions and answers
		.map((faq) => ({
			question: faq.question.trim(),
			answer: faq.answer.trim(),
		}));

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: sanitizedFaqs.map((faq) => ({
			'@type': 'Question',
			name: faq.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: faq.answer,
			},
		})),
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData, null, 2), // For easier debugging
			}}
		/>
	);
}
