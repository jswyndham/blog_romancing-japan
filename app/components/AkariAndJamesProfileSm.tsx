import React from "react";
import Image from "next/image";

export default function AkariAndJamesProfile() {
  return (
    <div className="relative bg-slate-300 w-fit text-left font-playfair_display">
      <figure className="w-80 rounded-xl p-4 m-auto md:hidden">
        <Image
          src="/images/akari-james.jpg"
          alt="Romancing Japan - James & Akari profile"
          width={384}
          height={257}
          className="object-fill"
          priority
        />
      </figure>
      <div className="flex flex-col items-end justify-end px-4">
        <div className="md:w-full md:flex md:flex-row md:items-center m-auto">
          <figure className="hidden md:flex w-80 rounded-xl p-4">
            <Image
              src="/images/akari-james.jpg"
              alt="Romancing Japan - James & Akari profile"
              width={384}
              height={257}
              className="object-fill"
              priority
            />
          </figure>
          <div className="flex flex-col items-center justify-center m-auto font-caveat text-3xl md:text-4xl">
            <p>James and Akari</p>
            <p>Saunders-Wyndham</p>
          </div>
        </div>
        <div className="p-6">
          <p className="text-lg font-sans">
            Hi everyone! I'm James and this is my amazing wife, Akari. We live
            in Kyoto, Japan, where we raise two beautiful children. Akari is a
            native to Kyoto and has lived here her whole life. I, on the other
            hand, am from Melbourne, Australia. I started coming to Japan as a
            teenager and have over 30 years of experience with Japanese culture.
            We've made Kyoto our home and together we've built the Romancing
            Japan site so we can share our passion for Japanese culture,
            lifestyle, and travel.
          </p>
        </div>
      </div>
    </div>
  );
}
