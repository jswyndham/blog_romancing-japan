"use client";

import React, { useState } from "react";

// Form Values
const initValues = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

// State Values
const initState = { values: initValues };

export default function contact() {
  // State Hooks
  const [state, setState] = useState(initState);

  // Pass all form values into the state
  const { values } = state;

  // On change includes all previous values in the state
  const handleChange = ({ target }: any) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
  };

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

        {/* Form */}
        <form className="w-full">
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
                className="appearance-none block w-full bg-slate-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                name="firstName"
                type="text"
                placeholder="First Name"
                required
                minLength={2}
                maxLength={20}
                value={values.firstName}
                onChange={handleChange}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
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
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
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
                value={values.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Subject
            </label>
            <input
              className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
              id="grid-first-name"
              name="subject"
              type="text"
              placeholder="Email Subject"
              required
              minLength={2}
              maxLength={50}
              value={values.subject}
              onChange={handleChange}
            />
          </div>

          {/* Message Section */}
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Message Input */}
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Your Message
              </label>
              <textarea
                rows={10}
                className="appearance-none block w-full bg-slate-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
                required
                name="message"
                value={values.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Include in Signup List */}
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block text-gray-500 font-bold">
                  <input className="mr-2 leading-tight" type="checkbox" />
                  <span className="text-sm">Send me your newsletter!</span>
                </label>
              </div>

              {/* Send Button */}
              <button
                className="shadow bg-indigo-500 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded hover:shadow-md hover:shadow-slate-500 focus:shadow-slate-200 active:bg-indigo-600"
                type="submit"
                disabled={
                  !values.firstName ||
                  !values.lastName ||
                  !values.email ||
                  !values.subject ||
                  !values.message
                }
                onClick={onSubmit}
              >
                SENDING...
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <!-- Credit: Componentity.com -->
			<a href='https://componentity.com' target='_blank' className='block'>
				<Image
					src=""
					width={900}
					height={700}
					alt='image'
					className='w-48 mx-auto my-5'
				/>
			</a> */}
    </>
  );
}
