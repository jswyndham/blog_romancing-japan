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
        <section className="h-fit flex flex-col bg-slate-900">
          {/* Top Image */}
          <figure className="flex h-full w-full justify-center">
            <Image
              src="/images/Miyajima.jpg"
              width={1000}
              height={1000}
              alt="Miyajima Japan"
              priority
              className="my-72 object-fill md:my-0 md:object-cover"
            />
          </figure>

          {/* Page Banner */}
          <div className="absolute top-24 w-full bg-slate-700 py-4 flex justify-center text-white text-3xl font-bold">
            About Us
          </div>

          {/* ARTICLE */}
          <article className="flex items-center justify-center align-middle">
            <div className="absolute top-40 md:top-56 md:w-[85%] lg:max-w-3xl flex flex-col justify-center align-middle py-4 px-12  backdrop-blur-sm bg-white/60 shadow-xl shadow-black">
              <div className="flex flex-col mt-3 md:mt-8 mb-2 mx-8 justify-center text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-catTags">
                  Welcome to Romancing Japan
                </h2>
                <div className="mt-2 md:mt-3 pb-1 text-primary text-md lg:text-lg font-bold">
                  <h3>Created & Edited by </h3>
                  <h3 className="text-black italic">James Saunders-Wyndham</h3>
                </div>
              </div>
              <div className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                <p className="py-2">
                  The purpose of this site is to provide insight and information
                  to readers about Japanese culture, lifestyle, and travel that
                  will interest those who either wish to come to Japan or simply
                  get to know more about the culture. Japan can be starkly
                  difference from other countries around the world. Either
                  preparing yourself for travel or getting ready to study, it is
                  always a positive step to gain a stronger understanding of
                  Japanese culture. This site should act as source of
                  information for all things Japan, including travel, lifestyle,
                  pop-culture, cooking, and local experiences.
                </p>
              </div>
              <div className="mt-1 md:mt-4 mx-4">
                <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                  Why "Romancing Japan"?
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  Whilst the name of this site might be confusing to some. I
                  chose it because it reflects the fact that many who come to
                  Japan often romanticize the idea of experiencing the lifestyle
                  and traditions. Through the decades, Japanese culture has
                  provoked intrigue and curiosity within people around the world
                  by setting itself apart as a unique cultural identity.
                </p>
              </div>
              <div className="mt-1 md:mt-4 mx-4">
                <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                  Who created this site?
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  My name is James Saunders-Wyndham and I'm from Australia.
                  However, I've been living in Japan (on and off) since the mid
                  1990s. I'm a permanent resident of Japan and have spent a good
                  chunk of my life in the city of Kyoto. I love this country and
                  I have a lot I want to share with you about living the land of
                  the rising sun.
                </p>
              </div>
              <div className="mt-1 md:mt-4 mx-4">
                <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                  Why build this site?
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  I'm a full-stack web developer with a background in teaching
                  and education. I love to code and I was looking for a project
                  to build. Since I also love living in Japan, I thought that I
                  should combine my two passions, and eventually I built
                  Romancing Japan. I hope that you enjoy my articles.
                </p>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
