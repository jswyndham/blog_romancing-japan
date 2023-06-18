"use client";

import clientConfig from "@/sanity/config/client-config";
import userEmail from "../../typings";
import React, { useRef, useState } from "react";

// type Props = {
//   params: {
//     firstName: string;
//     lastName: string;
//     email: string;
//   };
// };

export default function SignupCard() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  });

  // const [messageSuccess, setMessageSuccess] = useState<boolean>(false);
  // const [messageError, setMessageError] = useState<boolean>(false);

  const handleResponse = (status: number, msg: string) => {
    if (!msg) {
      return null;
    }
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputValue({
        firstName: "",
        lastName: "",
        email: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleOnChange = (e: {
    persist: () => void;
    target: { id: string; value: string };
  }) => {
    e.persist();
    setInputValue((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: "" },
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
    };

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    await fetch("api/userEmail", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
      const text = await res.text();
      handleResponse(res.status, text);
      // If success, trigger alert, clear input fields, and clear alert after 5 secs.
      if (res.status === 200) {
        // setMessageSuccess(!messageSuccess);
        setInputValue({
          firstName: "",
          lastName: "",
          email: "",
        });
        console.log("sent message");

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
      }
    });
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
              ref={emailRef}
              value={inputValue.email}
              onChange={(e: any) =>
                setInputValue({ ...inputValue, email: e.target.value })
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
              ref={firstNameRef}
              value={inputValue.firstName}
              onChange={(e: any) =>
                setInputValue({ ...inputValue, firstName: e.target.value })
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
            className="w-full h-full mt-2 mb-4 m-1 bg-slate-500 outline outline-offset-2 outline-slate-300 rounded-xl text-white font-bold active:bg-blue-300 active:text-base-100 hover:bg-slate-600 hover:outline-slate-400 transition-all duration-300 md:my-1"
            type="submit"
            disabled={status.submitting}
          >
            {!status.submitting
              ? !status.submitted
                ? "Sign Up"
                : "Submitted"
              : "Submitting..."}
          </button>
          {status.info.error && <div>Error: {status.info.msg}</div>}
          {!status.info.error && status.info.msg && (
            <div>{status.info.msg}</div>
          )}
        </div>
      </div>
    </div>
  );
}
