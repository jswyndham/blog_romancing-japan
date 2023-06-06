import React, { FormEvent, useState } from "react";
import ContactForm from "../components/ContactForm";

export default async function Contact() {
  return (
    <>
      <div className="absolute top-24 w-screen bg-slate-700 p-4 flex justify-center text-white text-3xl font-bold">
        Contact
      </div>
      <div className="max-w-screen-md h-screen mx-auto p-5">
        {/* Heading Text */}
        <div className="flex text-center items-center justify-center mt-20 mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In Touch with <br /><span className="text-red-700">Romancing Japan</span>
          </h3>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
