import Link from "next/link";
import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";

const NotFound = () => {
  return (
    <main className="h-full flex justify-center align-middle bg-black">
      {/* background image */}
      <figure className="h-screen ">
        <Image
          src="/images/not-found.jpg"
          width={1024}
          height={1024}
          alt="404 not found"
          priority
          className="w-full h-full object-cover"
        />
      </figure>

      {/* 404 TEXT */}
      <div className="absolute">
        <div className="text-center my-8 mx-3">
          <h2 className="font-krona_one text-5xl font-bold text-red-800 underline underline-offset-4">
            Error 404
          </h2>
        </div>
        <div className="w-80 ml-4 mt-64 text-2xl text-center font-bold">
          <h3 className="m-3 text-red-600">There was a problem...</h3>
          <p>We could not find the page you were looking for.</p>
        </div>
        <div className="m-5 text-2xl flex flex-col justify-center text-center align-middle">
          <p>Go back to</p>
          <p className="font-krona_one text-red-900 hover:text-blue-900">
            <Link href="/">Romancing Japan</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
