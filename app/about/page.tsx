import React from "react";
import Image from "next/image";
import { aboutPage } from "@/sanity/sanity-utils";
import SignupCardLong from "../components/SignupCardLong";
export const metadata = {
  title: "About Us",
  description:
    "An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, culture and cooking.",
  openGraph: {
    title: "About Us",
    description:
      "An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, culture and cooking.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

export default async function about() {
  const about_page = await aboutPage();

  return (
    <>
      <main className="relative h-full flex flex-col items-center justify-center overflow-x-hidden">
        {/* Page Banner */}
        <div className="absolute top-0 w-full bg-slate-700 py-4 flex justify-center text-white text-3xl font-bold">
          <h1>About Us</h1>
        </div>

        {/* ARTICLE */}
        <section className="">
          <div className="my-20 w-full flex flex-col items-center justify-center align-middle">
            {/* MAIN CONTENT */}
            <article className="flex flex-col items-center justify-center px-3 w-[90%] md:w-[95%] xl:max-w-5xl">
              <div className="my-5 md:my-12 mx-8 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-catTags">
                  Welcome to Romancing Japan
                </h2>
              </div>
              <div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
                <div className="pt-4 md:col-span-2">
                  <p>
                    My name is James Saunders-Wyndham, and I was born in Sydney
                    and raised in Melbourne, Australia. I have, however, been
                    living (on and off) in Japan since the mid-1990s. I am a
                    permanent resident and have lived in Kyoto for almost half
                    my life. I spent a year as an exchange student in Aichi
                    Prefecture when I was a teenager. During that period, I
                    would travel from Nagoya to Kyoto on weekends, spending the
                    day exploring temples and shrines and afterwards relaxing on
                    the banks of the Kamogawa River. In my late-twenties, I
                    eventually returned to Kyoto to work as a language
                    instructor. Life was exciting in Japan as a young adult and
                    I had the opportunity to travel around the country checking
                    out places that travel guides almost never cover. I decided
                    that I wanted to settle down in Kyoto, and after a brief
                    visit to Australia in my early thirties, I eventually moved
                    down with my partner, Akari. I received jobs at different
                    colleges, and my wife and I are currently raising two
                    wonderful children in one of Japan's oldest cities.
                  </p>
                </div>
                <div className="flex justify-center mx-2 my-4 md:my-6 md:col-span-1">
                  <Image
                    src="/about/opengraph-image.jpg"
                    alt="James SW Profile Image - Romancing Japan"
                    width={500}
                    height={500}
                    className="object-cover mx-14 shadow-xl shadow-slate-500"
                    priority
                  />
                </div>
              </div>
            </article>

            {/* SUBSCRIPTION CARD */}
            <article className="w-screen my-12 flex items-center justify-center">
              <SignupCardLong />
            </article>

            {/* PART TWO CONTENT */}
            <article className="flex flex-col items-center justify-center w-[90%] md:w-[95%] xl:max-w-5xl">
              <div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
                <div className="flex justify-center mx-2 md:mx-0 my-4 md:mt-6 md:col-span-1">
                  <Image
                    src="/about/opengraph-image2.jpg"
                    alt="Miyajima Japan"
                    width={500}
                    height={500}
                    className="object-cover mx-14 shadow-xl shadow-slate-500"
                    priority
                  />
                </div>
                <div className="py-2 mt-3 md:col-span-2">
                  <h2 className="text-center md:text-right pr-8 pb-6 text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                    Why "Romancing Japan"?
                  </h2>
                  <p className="text-lg px-2 md:text-xl lg:text-2xl font-heading text-justify">
                    While the name of this website may be puzzling to some, I
                    chose it because it symbolizes how many people romanticize
                    the idea of experiencing Japanese culture and traditions.
                    Japan's culture has piqued the interest and attention of
                    people all over the world by distinguishing itself as a
                    distinct cultural identity. The goal of this website is to
                    provide readers with insight and information about culture,
                    lifestyle, and travel that will interest those who either
                    wish to travel or simply want to learn more about the
                    country. Coming to Japan can provide many surprises because
                    it is so different from other cultures around the world.
                    Therefore, gaining a better understanding of life in Japan,
                    whether you are preparing for travel or studying the
                    language, is a positive move. This website should serve as a
                    resource for all things Japanese, including travel,
                    lifestyle, pop culture, cooking, and local experiences.
                  </p>
                </div>
              </div>
            </article>

            {/* PART THREE CONTENT */}
            <article className="flex flex-col items-center justify-center my-12 w-[90%] md:w-[95%] xl:max-w-5xl">
              <div className="mt-1 md:mt-4 mx-4">
                <h2 className="mb-8 text-xl text-center md:text-left lg:text-2xl font-extrabold font-catTags text-red-800">
                  Why did I create this site?
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg px-2 md:text-xl lg:text-2xl font-heading text-justify">
                  For a long time I had been toying with the idea of creating
                  online content to inform others about the country I've come to
                  call home. But, being a father and husband, and working as a
                  full-time teacher, can consume a lot of your time and energy.
                  However, in 2021 I began playing with the idea of learning to
                  build websites, specifically coding in JavaScript. I
                  discovered that I really enjoy coding, and as my skills
                  improved, I began looking for my first large project to build
                  (in Next.js for anyone interested). Because I love living in
                  Japan, I decided to merge my two interests, and thus Romancing
                  Japan was born. This website has evolved into a passion
                  project. I have poured a lot of effort and time into building
                  this site. As my audience grows (hopefully), I intend to
                  further improve this site by including additional features for
                  users to enjoy. I hope that you enjoy my website and the
                  articles I will be posting.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
