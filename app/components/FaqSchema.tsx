"use client";

type FaqSchemaProps = {
  faqs: { question: string; answer: string }[];
};

export default function FaqSchema({ faqs }: FaqSchemaProps) {
  if (!faqs || faqs.length === 0) {
    return null; // Avoid rendering invalid or empty JSON-LD
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
      .filter((faq) => faq.question && faq.answer) // Ensure valid questions and answers
      .map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
