import Image from "next/image";
import { getLatestPostOne } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
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

export default async function ArticleCardOne() {
  const post = await getLatestPostOne();

  return (
    <Link key={post._id} href={`/posts/${post.slug}`}>
      {/* Card with responsive sizes */}
      <div className="flex flex-col card rounded-none h-full w-full mx-2 my-1 hover:shadow-lg md:hover:shadow-xl md:hover:shadow-slate-700  hover:drop-shadow  hover:bg-base-100 hover:transition-all duration-300 md:rounded-md md:bg-base-300 md:flex-row md:my-4 md:mx-0 md:card lg:card-side group">
        {/* Title only visible in mobile/small window */}
        <div className="h-9/12 ml-4 my-4 border-l-4 border-red-700 md:hidden">
          <h1 className="font-heading text-4xl p-3 text-black font-bold md:hidden">
            {post.name}
          </h1>
        </div>

        {/* Display image */}
        <figure>
          <Image
            src={(await urlFor(post.image)).url()}
            width={900}
            height={700}
            alt={post.image}
            className="w-full h-full md:rounded-md"
            loading="lazy"
          />
        </figure>

        {/* Layer between image and text */}
        <div className="md:absolute md:inset-0 md:bg-gradient-to-r md:from-transparent md:via-transparent md:via-15% smd:via-30% md:to-base-200 md:to-60% xl:to-70% md:rounded-md"></div>

        {/* Title and article summary */}
        <div className="card-body md:w-[55%] smd:w-[52%] lg:w-[50%] 3xl:w-[45%] md:absolute md:flex md:p-4 md:right-0 text-center transition-all">
          {/* TITLE @ MD */}
          <div>
            <h1 className="hidden md:flex pb-1 text-4xl font-playfair_display top-0 md:mt-1 lg:mt-2 xl:text-5xl 2xl:mt-6 2xl:pb-2 3xl:pb-4 text-right text-red-800 font-extrabold">
              {post.name}
            </h1>
          </div>

          {/* Text summary field */}
          <div className="text-justify text-xl md:text-right md:bottom-0 md:mt-4 md:text-lg lg:text-xl">
            <PortableText
              value={post.summary}
              onMissingComponent={false}
              components={components}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
