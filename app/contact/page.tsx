import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../components/ContactForm"), {
  ssr: false,
});

// METADATA
export const metadata = {
  title: "Contact Page | Romancing Japan",
  description:
    "Contact us if you have any questions or want to know more about the website.",
  openGraph: {
    title: "Contact Page | Romancing Japan",
    description:
      "Contact us if you have any questions or want to know more about the website.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

// CONTACT PAGE
export default async function Contact() {
  return (
    <>
      <div className="absolute top-24 w-screen bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
        <h1>Contact Us</h1>
      </div>
      <div className="max-w-screen-md mx-auto p-5">
        {/* Heading Text */}
        <div className="flex text-center items-center justify-center mt-20 mb-16">
          <h2 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In Touch with <br />
            <span className="text-red-700">Romancing Japan</span>
          </h2>
        </div>

        {/* CONTACT FORM */}
        <ContactForm />
      </div>
    </>
  );
}
