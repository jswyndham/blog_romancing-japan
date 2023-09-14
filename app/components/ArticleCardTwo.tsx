import Image from "next/image";
import { getLatestPostTwo } from "@/sanity/sanity-utils";
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

export default async function ArticleCardTwo() {
  const post = await getLatestPostTwo();

  return (
    <Link key={post._id} href={`/posts/${post.slug}`}>
      <div className="h-full w-full flex flex-col card rounded-none my-4 hover:shadow-lg md:hover:shadow-xl md:hover:shadow-slate-700  hover:drop-shadow  hover:bg-gray-50 hover:transition-all duration-300 group md:bg-gray-200 md:h-full md:w-full md:my-2 md:ml-0 md:mr-3 md:mb-3 md:card-side md:rounded-md">
        <div className="h-9/12 ml-4 my-4 border-l-4 border-red-700 md:hidden">
          <h1 className="font-heading text-4xl p-3 text-black font-bold">
            {post.name}
          </h1>
        </div>
        <figure>
          <Image
            src={(await urlFor(post.image)).url()}
            width={900}
            height={700}
            alt={post.image}
            className="className='w-full h-full md:rounded-md"
            loading="lazy"
          />
        </figure>

        {/* Layer between image and text */}
        <div className="md:absolute md:inset-0 md:bg-gradient-to-b md:from-transparent md:via-transparent md:via-25% md:to-base-200 md:to-70% xl:to-80% md:rounded-md"></div>

        {/* Title and article summary */}
        <div className="card-body text-center md:w-full md:absolute md:flex md:p-4 md:bottom-0 md:text-left md:rounded-lg transition-all">
          <div>
            <h2 className="hidden text-3xl font-playfair_display md:flex text-red-800 font-extrabold">
              {post.name}
            </h2>
          </div>
          <div className="text-justify text-xl md:text-left md:rounded-b-md lg:hidden">
            <PortableText
              value={post.summary}
              onMissingComponent={false}
              components={components}
            />
          </div>
          {/* SHORT SUMMARY @ 2XL */}
          <div className="hidden lg:text-justify text-lg md:text-right lg:flex 2xl:mt-3 3xl:mt-1 3xl:text-lg">
            <PortableText
              value={post.summaryShort}
              onMissingComponent={false}
              components={components}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
