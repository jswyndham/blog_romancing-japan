import React from "react";
import Image from "next/image";

export default function AkariAndJamesProfile() {
  return (
    <div className="flex flex-col items-end justify-end px-4 2xl:items-center 2xl:justify-center">
      <div className="relative">
        <figure className="absolute w-80 xl:w-64 m-auto -left-3 -mt-20 rounded-xl">
          <Image
            src="/images/akari_james.jpg"
            alt="Romancing Japan profile"
            width={250}
            height={250}
            className="object-fill px-4"
            priority
          />
        </figure>
        <div className="bg-slate-300 w-52 px-4 2xl:px-4 pt-16 pb-6 mx-2 text-justify font-playfair_display whitespace-pre-line">
          <div className="flex justify-center my-2">
            <h3 className="mb-2 font-caveat text-2xl 2xl:text-3xl">
              James and Akari Saunders-Wyndham
            </h3>
          </div>
          <div>
            <p className="text-lg">
              Hi everyone! I'm James and this is my wonderful wife, Akari. We live in Kyoto, Japan, where we raise two
              beautiful children. Akari is a native to Kyoto and has lived here her whole life. I, on the other hand, am from Melbourne, Australia. However, I've made Kyoto my home. Together we've built the Romancing Japan site so we can share our passion for Japanese culture, lifestyle, travel, and cooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
