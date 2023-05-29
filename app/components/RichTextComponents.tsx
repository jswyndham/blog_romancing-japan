"use client";

import Image from "next/image";
import Link from "next/image";
//import { urlFor } from "@/lib/urlFor";
import urlBuilder from "@sanity/image-url";

const RichTextComponents = ({ value, isInline }: any) => {
  return (
    <div className='relative w-full h-96 m6 mx-auto'>
      <Image
        width={500}
        height={350}
        src={urlBuilder()
          .image(value)
          .width(isInline ? 500 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading='lazy'
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: 400 / 250,
        }}
      />
    </div>
  );
};

const components = {
  types: {
    image: RichTextComponents,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className='list-disc ml-10 py-5 space-y-5'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className='list-decimal mt-lg'>{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className='text-5xl py-10 font-bold'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-4xl py-10 font-bold'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='text-3xl py-10 font-bold'>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='text-2xl py-10 font-bold'>{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className='border-l-[#CA3433] border-l-4 pl-5 py-5 my-5'>
        {children}
      </blockquote>
    ),
  },

  marks: {
    em: ({ children }: any) => (
      <em className='text-gray-600 font-semibold'>{children}</em>
    ),

    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          ref={value.href}
          rel={rel}
          // src={value}
          // alt='Blog Post Image'
          className='underline decoration-[#CA3433] hover:decoration-black'
          src={""}
          alt={""}
        >
          {children}
        </Link>
      );
    },
  },
};

export default components;
