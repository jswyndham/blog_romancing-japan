import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact us if you have any questions or want to know more about the website.",
  openGraph: {
    title: "Contact Us",
    description:
      "Contact us if you have any questions or want to know more about the website.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

export default async function Contact() {
  return (
    <>
      <div className="absolute top-24 w-screen bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
        <h1>Contact Us</h1>
      </div>
      <div className="max-w-screen-md mx-auto p-5">
        {/* Heading Text */}
        <div className="flex text-center items-center justify-center mt-20 mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In Touch with <br />
            <span className="text-red-700">Romancing Japan</span>
          </h3>
        </div>

        {/* CONTACT FORM */}
        <ContactForm />
      </div>
    </>
  );
}
