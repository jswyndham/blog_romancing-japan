"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupCard() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    email: "",
  });

  const [messageSuccess, setMessageSuccess] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      firstName: firstNameRef.current?.value,
      email: emailRef.current?.value,
    };

    await fetch("api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(data, "Contact sent");
    });

    setContactDetails({ firstName: "", email: "" });
  };

  return (
    <section className="flex flex-col items-center justify-center  md:justify-between h-full w-full bg-slate-600 drop-shadow-md md:p-1 lg:px-1 lg:py-0 2xl:text-center">
      <div className="flex flex-col xl:flex-row-reverse xl:gap-16">
        <article className="">
          {/* TITLE */}
          <div className="flex flex-col md:flex-row items-center justify-center align-middle">
            <div className=" flex justify-center px-1 pt-2 mt-2 md:my-2 xl:py-1 lg:pt-0">
              <h2 className="card-title font-carter_one text-base-100 text-4xl ">
                Subscribe
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="md:mt-7 px-3 lg:mt-5 pb-2 md:pb-4 text-base-100 text-xl lg:text-lg 2xl:text-2xl">
              <p>for updates on the latest articles!</p>
            </div>
          </div>

          {/* FORM SECTION */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col m-4 justify-center md:items-center space-y-4 md:space-y-0 xl:mx-1 xl:mt-0 xl:mb-4 md:flex-row md:gap-4"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-1">
              {/* FIRST NAME INPUT */}
              <div className="card-actions relative">
                <Image
                  src="/images/firstName-24.png"
                  width={24}
                  height={24}
                  alt="name input icon"
                  className="absolute mt-2 ml-5 lg:mt-1 2xl:mt-2"
                />
                <input
                  type="text"
                  name="signup"
                  placeholder="first name"
                  className="w-full flex justify-start py-2 pl-8 lg:py-1 2xl:py-2 ml-4 mr-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
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

              {/* EMAIL INPUT */}
              <div className="card-actions relative">
                <Image
                  src="/images/mail-24.png"
                  width={24}
                  height={24}
                  alt="romancing japan white logo"
                  className="absolute mt-2 ml-5 lg:mt-1 2xl:mt-2 "
                />
                <input
                  type="text"
                  name="signup"
                  placeholder="email"
                  className="w-full flex justify-start py-2 pl-8 ml-4 mr-2 lg:py-1 2xl:py-2 rounded-md outline outline-offset-2 outline-slate-400 focus:outline-green-400"
                  minLength={2}
                  maxLength={100}
                  required
                  ref={emailRef}
                  value={contactDetails.email}
                  onChange={(e: any) =>
                    setContactDetails({
                      ...contactDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* SEND BUTTON */}
            <div className="my-4 py-3 md:w-[25%] md:mb-4">
              <button
                className="w-full h-full py-1 outline outline-offset-2 outline-base-100 rounded-xl text-base-100 bg-red-700 font-bold hover:bg-base-100 hover:outline-red-600 hover:text-red-700 active:bg-red-400 active:text-base-200 active:outline-red-800 transition-all duration-300"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </article>

        {/* FOLLOW US */}
        <article className="flex flex-row items-center justify-center align-middle pb-4">
          <div className="px-8">
            <h3 className="font-delicious_handraw  text-4xl text-base-100">
              Follow us!
            </h3>
          </div>
          <div className="flex flex-row gap-4">
            <Link href="https://twitter.com/RomancingJapan" target="_blank">
              <Image
                src="/images/twitter-50-white.png"
                width={30}
                height={30}
                alt="romancing japan twitter"
              />
            </Link>
            <Link href="/" target="_blank">
              <Image
                src="/images/instagram-50-white-2.png"
                width={30}
                height={30}
                alt="romancing japan instagram"
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100093723613018"
              target="_blank"
            >
              <Image
                src="/images/facebook-50-white.png"
                width={30}
                height={30}
                alt="romancing japan facebook"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
