"use client";

import React, { useRef } from "react";

export default function ContactForm() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
    };

    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("Success!!!");
    });
  };

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* First Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
              minLength={2}
              maxLength={20}
              ref={firstNameRef}
            />
          </div>

          {/* Last Name */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              minLength={2}
              maxLength={20}
              ref={lastNameRef}
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
              id="email"
              name="email"
              type="email"
              placeholder="********@*****.**"
              required
              ref={emailRef}
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
            id="subject"
            name="subject"
            type="text"
            placeholder="Email Subject"
            required
            minLength={2}
            maxLength={50}
            ref={subjectRef}
          />
        </div>

        {/* Message Section */}
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Message Input */}
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-message"
            >
              Your Message
            </label>
            <textarea
              rows={10}
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
              id="grid-message"
              required
              name="message"
              ref={messageRef}
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            className="shadow mx-3 mt-2 bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded hover:shadow-md hover:shadow-slate-500 focus:shadow-slate-200 active:bg-indigo-600"
            type="submit"
            // disabled={
            //   !data.firstName ||
            //   !data.lastName ||
            //   !data.email ||
            //   !data.subject ||
            //   !data.message
            // }
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}
