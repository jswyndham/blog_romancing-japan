import React from "react";
import Image from "next/image";
import SignupCardLong from "../components/SignupCardLong";
export const metadata = {
  title: "About Us Page | Romancing Japan",
  description:
    "An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, and culture.",
  openGraph: {
    title: "About Us Page | Romancing Japan",
    description:
      "An explanation about how and why we decided to build this site and write about Japanese travel, lifestyle, and culture.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

export default async function about() {
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
                    permanent resident and have lived in Kyoto for half of my
                    adult-life. I started out as a high school exchange student
                    in Aichi Prefecture. During that year I spent my time
                    learning the language and emersed in the culture. I first
                    moved to Kyoto for a short period in 1999. Kyoto made a big
                    impact on me as a teenager and I swore one day that I would
                    settle down there. After going back to Australia for an
                    extended period, I eventually returned to Kyoto to work as a
                    language instructor in my late-twenties. Life was exciting
                    in Japan as a young adult and I had the opportunity to
                    travel around the country discovering places that travel
                    guides almost never cover. By the time I reached my early
                    thirties, my partner, Akari, and I decided we wanted to
                    start a family. I eventually went back to university to
                    become a teacher, which led tp jobs at several colleges. My
                    wife and I are currently raising two wonderful children in
                    one of Japan's oldest and most culturally rich cities.
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
                    chose it because it symbolizes how people often romanticize
                    the idea of experiencing Japanese culture and traditions.
                    Japan's culture has piqued the interest and attention of
                    people all over the world by distinguishing itself as a
                    distinct cultural identity. The goal of this website is to
                    provide readers with insight and information about culture,
                    lifestyle, and travel that will interest those who either
                    wish to travel or simply want to learn more about the
                    country. Coming to Japan can provide many surprises because
                    it is so different from other cultures, which can often
                    result in culture shock. Therefore, gaining an understanding
                    of life in Japan, whether you are preparing for travel or
                    studying the language, is a positive move. This website
                    should serve as a resource for all things Japanese,
                    including travel, lifestyle, pop culture, and local
                    experiences.
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
                  call home. However, being a parent, husband, and working
                  multiple teaching jobs, can consume a lot of your time and
                  energy. However, in 2021 I began playing with the idea of
                  learning to build websites, specifically coding in JavaScript.
                  I discovered that I really enjoy coding, and as my skills
                  improved, I began looking for my first large project to build
                  (in Next.js and Tailwind for anyone interested). Since I love
                  living in Japan, I decided to merge my two interests, and thus
                  Romancing Japan was born. This website has evolved into a
                  passion project. I have poured a lot of effort and time into
                  building this site. As my audience grows (hopefully), I intend
                  to further improve this site by including additional features
                  for users to try. I hope that you enjoy our website and the
                  articles that we will be posting.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
