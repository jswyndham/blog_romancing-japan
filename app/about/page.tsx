import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "An explanation about how and why this we run this site.",
  openGraph: {
    title: "About Us",
    description: "An explanation about how and why this we run this site.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

export default function about() {
  return (
    <>
      <main>
        <section className="z-0 h-screen flex flex-col bg-slate-900">
          {/* Top Image */}
          <figure className="flex justify-center">
            <Image
              src="/images/Miyajima.jpg"
              width={1000}
              height={1000}
              alt="image"
              priority
              className="w-max-xl object-cover"
            />
          </figure>

          {/* Page Banner */}
          <div className="absolute top-24 w-full bg-slate-700 py-4 flex justify-center text-white text-3xl font-bold">
            About Us
          </div>

          {/* ARTICLE */}
          <article className="flex items-center justify-center align-middle">
            <div className="absolute top-40 md:top-56 md:w-[85%] lg:max-w-3xl flex flex-col justify-center align-middle py-4 px-12  backdrop-blur-sm bg-white/50 shadow-xl shadow-black">
              <div className="mt-8 mb-2 mx-8 flex justify-center">
                <h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-extrabold font-catTags">
                  Welcome to Romancing Japan
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  Whilst the name of this site might be confusing to some, I
                  chose it because I wanted to reflect the fact that many people
                  who come to Japan often romanticize the idea of coming here.
                  Through the decades, Japanese culture has triggered intrigue
                  and curiosity within people around the world by setting itself
                  apart as a unique cultural treasure. That's exactly how I came
                  to be here.
                </p>
              </div>
              <div className="mt-4 mx-4">
                <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                  What is this site about?
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  The purpose of this site is to provide insight and information
                  to readers about Japanese culture and lifestyle that won't be
                  common knowledge to those who live outside of Japan. I've
                  lived in Japan (on and off) since the mid 1990s, and I have a
                  lot I want to share about the country of the rising sun. This
                  site should act as source of information for all things Japan,
                  including travel, lifestyle, pop-culture, cooking, and local
                  experiences.
                </p>
              </div>
              <div className="mt-4 mx-4">
                <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                  I have two reasons why I started this website...
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  Firstly, I love to code and I was looking for a project to
                  build myself. Secondly, I've lived in Japan for so long that I
                  have a lot I want to say about it and share with others.
                </p>
              </div>
              <div className="mt-4 mx-4">
                <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                  Why build this site?
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  Firstly, I love to code and I was looking for a project to
                  build myself. Secondly, I've lived in Japan for so long that I
                  have a lot I want to say about it and share with others.
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
