"use client";

import React, { useRef, useState } from "react";

export default function SignupCard() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // const [messageSuccess, setMessageSuccess] = useState<boolean>(false);
  // const [messageError, setMessageError] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
    };

    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      // If success, trigger alert, clear input fields, and clear alert after 5 secs.
      // if (res.status === 200) {
      //   setMessageSuccess(!messageSuccess);
      //   setInputValue({
      //     firstName: "",
      //     lastName: "",
      //     email: "",
      //   });
      //   setTimeout(() => {
      //     setMessageSuccess((messageSuccess) => !messageSuccess);
      //   }, 5000);
      //   // If error, trigger alert, clear after 5 secs, and retain text in input fields
      // } else {
      //   setMessageError(!messageError);
      //   setTimeout(() => {
      //     setMessageError((messageError) => !messageError);
      //   }, 5000);
      // }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full bg-sign-up bg-cover drop-shadow-md md:p-2 2xl:p-0 2xl:text-center">
      <div className="flex flex-col md:justify-between">
        {/* TITLE */}
        <div className=" flex justify-center px-5 pt-2 md:my-2 2xl:my-12">
          <h2 className="card-title py-4 text-white font-roboto_condensed font-extrabold text-3xl md:text-5xl">
            SIGN UP
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="flex justify-center mt-1 mb-1 px-5 md:my-4 2xl:my-12 pb-4 text-white text-xl 2xl:text-2xl font-bold">
          <p>
            To receive updates on the latest articles discussing all things
            Japan, register your email now! Your support can help us to help us
            to make this blog even better.
          </p>
        </div>

        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col m-4 justify-center space-y-4 md:space-y-6 2xl:space-y-8 2xl:bottom-2 2xl:my-16 2xl:mx-1"
        >
          {/* EMAIL INPUT */}
          <div className="card-actions">
            <input
              type="text"
              name="signup"
              placeholder="first name"
              className="w-full flex justify-start p-2 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
              required
              ref={emailRef}
              value={inputValue.email}
              onChange={(e: any) =>
                setInputValue({ ...inputValue, email: e.target.value })
              }
            />
          </div>

          {/* FIRST NAME INPUT */}
          <div className="card-actions">
            <input
              type="text"
              name="signup"
              placeholder="last name"
              className="w-full flex justify-start p-2 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
              required
              minLength={2}
              maxLength={20}
              ref={firstNameRef}
              value={inputValue.firstName}
              onChange={(e: any) =>
                setInputValue({ ...inputValue, firstName: e.target.value })
              }
            />
          </div>

          {/* LAST NAME INPUT */}
          <div className="card-actions">
            <input
              type="text"
              name="signup"
              placeholder="email"
              className="w-full flex justify-start p-2 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
              minLength={2}
              maxLength={20}
              ref={lastNameRef}
              value={inputValue.lastName}
              onChange={(e: any) =>
                setInputValue({ ...inputValue, lastName: e.target.value })
              }
            />
          </div>
        </form>

        {/* SEND BUTTON */}
        <div className="pr-2 -mt-1 2xl:mx-2 2xl:my-14">
          <button
            className="w-full h-full mt-2 mb-4 py-1 m-1 bg-slate-500 outline outline-offset-2 outline-slate-300 rounded-xl text-white font-bold active:bg-blue-300 active:text-base-100 hover:bg-slate-600 hover:outline-slate-400 transition-all duration-300 md:mb-2 xl:py-0"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
