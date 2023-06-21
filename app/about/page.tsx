import React from "react";
import Image from "next/image";
import { aboutPage } from "@/sanity/sanity-utils";
import TextComponent from "../components/TextComponent";
import { PortableText } from "@portabletext/react";

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
            {about_page.map(async (about: any) => (
              <div
                key={about._id}
                className="absolute top-40 md:top-56 md:w-[85%] lg:max-w-3xl flex flex-col justify-center align-middle py-4 px-12  backdrop-blur-sm bg-white/60 shadow-xl shadow-black"
              >
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
                <div className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                  <p className="py-2">
                    <PortableText
                      value={about.content}
                      onMissingComponent={false}
                      components={components}
                    />
                  </p>
                </div>
                <div className="mt-1 md:mt-4 mx-4">
                  <h2 className="text-xl lg:text-2xl font-extrabold font-catTags text-red-800">
                    {about.subTitleOne}
                  </h2>
                </div>
                <div className="py-2">
                  <p className="text-lg md:text-xl lg:text-2xl font-heading text-justify">
                    <PortableText
                      value={about.subContentOne}
                      onMissingComponent={false}
                      components={components}
                    />
                  </p>
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
          </article>
        </section>
      </main>
    </>
  );
}
