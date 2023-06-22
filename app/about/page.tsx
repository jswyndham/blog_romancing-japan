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
      <main className="h-full flex flex-col items-center justify-center">
        {/* Page Banner */}
        <div className="absolute top-24 w-full bg-slate-700 py-4 flex justify-center text-white text-3xl font-bold">
          <h1>About Us</h1>
        </div>

        {/* ARTICLE */}
        <section>
          {about_page.map(async (about: any) => (
            <div
              key={about._id}
              className="my-20 flex flex-col justify-center align-middle py-4 px-12"
            >
              <article className="md:w-[97%] xl:max-w-5xl">
                <div className="flex flex-col mt-3 md:mt-8 mb-2 mx-8 justify-center text-center">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold font-catTags">
                    {about.titleMain}
                  </h2>
                  <div className="mt-2 md:mt-3 pb-1 text-primary text-md lg:text-lg font-bold">
                    <h3>Created & Edited by </h3>
                    {about.author.map((author: any) => (
                      <div key={about._id}>
                        <h3 className="text-black italic">{author.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
                  <div className="py-2 md:col-span-2">
                    <PortableText
                      value={about.content}
                      onMissingComponent={false}
                      components={components}
                    />
                  </div>
                  <div className="relative  flex justify-center mx-2 my-6 md:col-span-1">
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
              <article className="flex items-center justify-center">
                <SignupCardLong />
              </article>
              <div className="grid text-lg md:text-xl lg:text-2xl font-heading text-justify md:grid-flow-col md:gap-8 md:grid-cols-3">
                <div className="py-2 md:col-span-2">
                  <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                    {about.subTitleOne}
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                    <PortableText
                      value={about.subContentOne}
                      onMissingComponent={false}
                      components={components}
                    />
                  </p>
                </div>
                <div className="relative  flex justify-center mx-2 my-6 md:col-span-1">
                  <Image
                    src={(
                      await urlFor(
                        "https://cdn.sanity.io/images/x0c10dda/production/c10d81f2fffca89866b0788d8a08ddf7bb75fb84-2592x3888.jpg"
                      )
                    ).url()}
                    alt={about.titleMain}
                    width={900}
                    height={900}
                    className="w-full mx-14 shadow-xl shadow-slate-500"
                    priority
                  />
                </div>
              </div>
              <div className="mt-1 md:mt-4 mx-4">
                <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                  {about.subTitleTwo}
                </h2>
              </div>
              <div className="py-2">
                <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  <PortableText
                    value={about.subContentTwo}
                    onMissingComponent={false}
                    components={components}
                  />
                </p>
              </div>
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
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
