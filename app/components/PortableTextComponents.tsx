import { urlFor } from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PortableTextComp() {
  return {
    types: {
      image: async ({ value }: any) => {
        return (
          <figure className="flex flex-col my-6">
            <Image
              src={(await urlFor(value)).fit("max").auto("format").url()}
              alt={value.caption}
              width={700}
              height={500}
              loading="lazy"
            />
            <figcaption className="italic text-base text-left mt-2">
              {value.caption}
            </figcaption>
          </figure>
        );
      },
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
        <h5 className="text-xl pt-7 pb-3 font-extrabold">{children}</h5>
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
      link: ({ value, children }: any) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;

        return (
          <Link
            href={value?.href}
            target={target}
            rel={"_blank"}
            className="underline decoration-blue-600 text-blue-600 hover:decoration-blue-900 hover:text-blue-900"
          >
            {children}
          </Link>
        );
      },
    },
  };
}

export default PortableTextComp;
