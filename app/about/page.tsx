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
                    My name is James Saunders-Wyndham, and I am originally from
                    Melbourne, Australia. However, I've been living (on and off)
                    in Japan since the mid-1990s. I'm a permanent resident of
                    Japan and have lived in Kyoto for almost half my life. As a
                    teenager, I spent a year in Japan as an exchange student at
                    a high school in Aichi Prefecture. During that time, I would
                    travel from Nagoya (in Aichi) to Kyoto to spend my weekends
                    touring temples and shrines during the day and then hanging
                    out on the banks of the Kamogawa River. I eventually
                    returned to Kyoto in my twenties to work as a language
                    teacher. I think Kyoto is one of Japan's most beautiful
                    cities because of its history, its atmosphere, and its open
                    spaces. I decided that I wanted to stay in Kyoto, and after
                    a brief return to Australia in my early thirties, I
                    eventually settled down with my partner Akari. I got a job
                    at a university and we now raising two young children.
                  </p>
                </div>
                <div className="flex justify-center mx-2 my-4 md:my-6 md:col-span-1">
                  <Image
                    src="/images/James_Profile.jpg"
                    alt="James SW Profile Image - Romancing Japan"
                    width={900}
                    height={900}
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
                    src="/images/Miyajima.jpg"
                    alt="Miyajima Japan"
                    width={900}
                    height={900}
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
                    chose it because it symbolizes how many visitors to Japan
                    romanticize the idea of experiencing the culture and
                    traditions. Japanese culture has piqued the interest and
                    attention of people all over the world throughout the years
                    by distinguishing itself as a distinct cultural identity.
                    The goal of this website is to provide readers with insight
                    and information about Japanese culture, lifestyle, and
                    travel that will interest those who wish to visit Japan or
                    simply want to learn more about the country. Coming to Japan
                    can provide many surprises because it is so different from
                    other cultures around the world. It is always a positive
                    step to gain a better understanding of Japanese culture,
                    whether you are preparing for travel or studying the
                    language. This website should serve as a resource for all
                    things Japanese, including travel, lifestyle, pop culture,
                    cooking, and local experiences.
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
                  online content to educate and inform others about my favorite
                  place, Japan. However, working as a full-time teacher, father,
                  and husband can take up a lot of your schedule. Although, from
                  2021 I started playing with the idea of learning to build
                  websites, specifically learning to code in JavaScript. Well, I
                  enjoy coding, and as my skills improved, I was looking for my
                  first large project to construct (in Next.js for anyone
                  interested). Because I also enjoy living in Japan, I decided
                  to merge my two loves, and thus Romancing Japan was born. This
                  website is my passion project. I have poured a lot of effort
                  and love into building this site. As my audience grows (I
                  hope!), I intend to improve this site further by adding more
                  features for users to use. I hope that you enjoy my website
                  and the articles I will upload.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
