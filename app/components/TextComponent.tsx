import React from "react";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";

const RichTextComponents = async ({ value }: any) => {
  return (
    <div className="flex items-center justify-center w-full h-full my-6">
      <Image
        src={(await urlFor(value)).url()}
        alt={value.name}
        width={700}
        height={700}
        priority
      />
    </div>
  );
};

export default async function TextComponent() {
  const components = {
    types: {
      image: RichTextComponents,
      // Any other custom types you have in your content
      // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc ml-8 py-5 space-y-5">{children}</ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal mt-lg ml-4 py-6 space-y-5">{children}</ol>
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className="text-5xl py-7 font-bold">{children}</h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-2xl py-4 font-bold">{children}</h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-3xl py-7 font-bold">{children}</h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-2xl pt-7 pb-3 font-bold">{children}</h4>
      ),
      h5: ({ children }: any) => (
        <h4 className="text-xl pt-7 pb-3 font-extrabold">{children}</h4>
      ),

      blockquote: ({ children }: any) => (
        <blockquote className="border-l-[#CA3433] border-l-4 pl-5 py-5 my-5">
          {children}
        </blockquote>
      ),
    },

    marks: {
      em: ({ children }: any) => (
        <em className="text-gray-600 font-semibold">{children}</em>
      ),
    },
  };
  return components;
}
