"use client";

import clientConfig from "@/sanity/config/client-config";
import { createClient } from "next-sanity";
import React, { useRef, useState } from "react";

// type NewsLetter = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };

// const initialState: NewsLetter = {
//   firstName: "",
//   lastName: "",
//   email: "",
// };

export default function SignupCard() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [messageSuccess, setMessageSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
    };

    await fetch("api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(data, "Contact sent");
    });

    setContactDetails({ firstName: "", lastName: "", email: "" });
  };

  return (
    <div className="flex flex-col justify-center h-full w-full bg-sign-up bg-cover drop-shadow-md md:p-2 lg:px-1 lg:py-0 2xl:p-2 2xl:text-center">
      <div className="flex flex-col md:justify-between">
        {/* TITLE */}
        <div className=" flex justify-center px-5 pt-2 md:my-1 lg:pt-0 2xl:my-12">
          <h2 className="card-title py-4 text-white font-roboto_condensed font-extrabold text-3xl md:text-4xl lg:py-0 xl:py-2 2xl:text-5xl">
            SIGN UP
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="flex justify-center my-1 px-5 md:my-4 lg:my-0 2xl:my-12 pb-4 text-white text-xl lg:text-lg 2xl:text-2xl font-bold">
          <p>
            To receive updates on the latest articles discussing all things
            Japan, register your email now! Your support can help us to help us
            to make this blog even better.
          </p>
        </div>

        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-4 justify-center space-y-4 md:pb-2 2xl:space-y-8 2xl:my-16 xl:mx-1 xl:my-2"
        >
          {/* FIRST NAME INPUT */}
          <div className="card-actions">
            <input
              type="text"
              name="signup"
              placeholder="first name"
              className="w-full flex justify-start p-2 lg:py-1 2xl:py-2 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
              required
              ref={firstNameRef}
              value={contactDetails.firstName}
              onChange={(e: any) =>
                setContactDetails({
                  ...contactDetails,
                  firstName: e.target.value,
                })
              }
            />
          </div>

          {/* LAST NAME INPUT */}
          <div className="card-actions">
            <input
              type="text"
              name="signup"
              placeholder="last name"
              className="w-full flex justify-start p-2 ml-4 mr-2 lg:py-1 2xl:py-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
              required
              minLength={2}
              maxLength={20}
              ref={lastNameRef}
              value={contactDetails.lastName}
              onChange={(e: any) =>
                setContactDetails({
                  ...contactDetails,
                  lastName: e.target.value,
                })
              }
            />
          </div>

          {/* EMAIL INPUT */}
          <div className="card-actions">
            <input
              type="text"
              name="signup"
              placeholder="email"
              className="w-full flex justify-start p-2 ml-4 mr-2 lg:py-1 2xl:py-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
              minLength={2}
              maxLength={20}
              required
              ref={emailRef}
              value={contactDetails.email}
              onChange={(e: any) =>
                setContactDetails({ ...contactDetails, email: e.target.value })
              }
            />
          </div>

          {/* SEND BUTTON */}
          <div className="pr-2 -mt-1 2xl:mx-2 2xl:my-14">
            <button
              className="w-full h-full mt-2 mb-4 m-1 bg-slate-500 outline outline-offset-2 outline-slate-300 rounded-xl text-white font-bold active:bg-blue-300 active:text-base-100 hover:bg-slate-600 hover:outline-slate-400 transition-all duration-300 md:my-1"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
