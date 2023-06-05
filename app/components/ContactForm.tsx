"use client";

import React, { FormEvent, useState } from "react";

// Form Values
const initState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  async function handleSubmit(e: any) {
    e.preventDefault();
    const data = {
      firstName: String(e.target.firstName.value),
      lastName: String(e.target.lastName.value),
      email: String(e.target.email.value),
      subject: String(e.target.subject.value),
      message: String(e.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully.");
    }

    if (!response.ok) {
      console.log("Error. Message not sent.");
    }
  }

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* First Name */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="firstName"
              type="text"
              placeholder="First Name"
              required
              minLength={2}
              maxLength={20}
            />
          </div>

          {/* Last Name */}
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
              id="grid-last-name"
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              minLength={2}
              maxLength={20}
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
              id="grid-email"
              name="email"
              type="email"
              placeholder="********@*****.**"
              required
            />
          </div>
        </div>

        {/* Subject Field */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="contact-subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="Email Subject"
            required
            minLength={2}
            maxLength={50}
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
