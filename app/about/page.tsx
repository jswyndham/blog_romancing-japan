import React from "react";
import Image from "next/image";
import { aboutPage } from "@/sanity/sanity-utils";
import TextComponent from "../components/TextComponent";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/urlFor";
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

  const components = await TextComponent();

  return (
    <>
      <main className="relative h-full flex flex-col items-center justify-center overflow-x-hidden">
        {/* Page Banner */}
        <div className="absolute top-0 w-full bg-slate-700 py-4 flex justify-center text-white text-3xl font-bold">
          <h1>About Us</h1>
        </div>

        {/* ARTICLE */}
        <section className="">
          {about_page.map(async (about: any) => (
            <div
              key={about._id}
              className="my-20 w-full flex flex-col items-center justify-center align-middle"
            >
              {/* MAIN CONTENT */}
              <article className="flex flex-col items-center justify-center px-3 w-[90%] md:w-[95%] xl:max-w-5xl">
                <div className="my-5 md:my-12 mx-8 text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-catTags">
                    {about.titleMain}
                  </h2>
                </div>
                <div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
                  <div className="pt-4 md:col-span-2">
                    <PortableText
                      value={about.content}
                      onMissingComponent={false}
                      components={components}
                    />
                  </div>
                  <div className="flex justify-center mx-2 my-4 md:my-6 md:col-span-1">
                    <Image
                      src={(await urlFor(about.image)).url()}
                      alt={about.titleMain}
                      width={900}
                      height={900}
                      className="object-cover mx-14 shadow-xl shadow-slate-500"
                      priority
                    />
                  </div>
                </div>
              </article>

              {/* SUBSCRIPTION CARD */}
              <article className="w-screen flex items-center justify-center">
                <SignupCardLong />
              </article>

              {/* PART TWO CONTENT */}
              <article className="flex flex-col items-center justify-center w-[90%] md:w-[95%] xl:max-w-5xl">
                <div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
                  <div className="flex justify-center mx-2 md:mx-0 my-4 md:mt-6 md:col-span-1">
                    <Image
                      src={(
                        await urlFor(
                          "https://cdn.sanity.io/images/x0c10dda/production/c10d81f2fffca89866b0788d8a08ddf7bb75fb84-2592x3888.jpg"
                        )
                      ).url()}
                      alt={about.titleMain}
                      width={900}
                      height={900}
                      className="object-cover mx-14 shadow-xl shadow-slate-500"
                      priority
                    />
                  </div>
                  <div className="py-2 mt-3 md:col-span-2">
                    <h2 className="text-right pr-8 pb-6 text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                      {about.subTitleOne}
                    </h2>
                    <p className="text-lg px-2 md:text-xl lg:text-2xl font-heading text-justify">
                      <PortableText
                        value={about.subContentOne}
                        onMissingComponent={false}
                        components={components}
                      />
                    </p>
                  </div>
                </div>
              </article>

              {/* PART THREE CONTENT */}
              <article className="flex flex-col items-center justify-center my-12 w-[90%] md:w-[95%] xl:max-w-5xl">
                <div className="mt-1 md:mt-4 mx-4">
                  <h2 className="mb-8 text-xl lg:text-2xl font-extrabold font-catTags text-red-800 text-left">
                    {about.subTitleTwo}
                  </h2>
                </div>
                <div className="py-2">
                  <p className="text-lg px-2 md:text-xl lg:text-2xl font-heading text-justify">
                    <PortableText
                      value={about.subContentTwo}
                      onMissingComponent={false}
                      components={components}
                    />
                  </p>
                </div>
              </article>

              {/* PART FOUR CONTENT */}
              <article className="flex flex-col items-center justify-center px-3 w-[90%] md:w-[95%] xl:max-w-5xl">
                <div className="mt-1 md:mt-4 mx-4">
                  <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                    {about.subTitleThree}
                  </h2>
                </div>
                <div className="py-2">
                  <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                    <PortableText
                      value={about.subContentThree}
                      onMissingComponent={false}
                      components={components}
                    />
                  </p>
                </div>
              </article>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
