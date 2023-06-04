import React, { FormEvent, useState } from "react";
import ContactForm from "../components/ContactForm";

export default async function Contact() {
  return (
    <>
      <div className="max-w-screen-md h-screen mx-auto p-5">
        {/* Heading Text */}
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular uppercase">
            Contact
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Get In <span className="text-red-700">Touch</span>
          </h3>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
