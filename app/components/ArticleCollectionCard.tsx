import Image from "next/image";
import { getPostsArchive } from "@/sanity/sanity-utils";
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
          rel={"_blank" && "noindex nofollow"}
          className="underline decoration-blue-600 text-blue-600 hover:decoration-blue-900 hover:text-blue-900"
        >
          {children}
        </Link>
      );
    },
  },
};

export default async function ArticleCollectionCard() {
  const posts = await getPostsArchive();

  return posts.map(async (post: any) => {
    return (
      <>
        <section className="flex justify-center">
          <article key={post._id} className="">
            <Link key={post._id} href={`/posts/${post.slug}`}>
              <div
                key={post._id}
                className="card rounded-none w-fit h-fit mx-2 my-6 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow  hover:bg-base-100 hover:transition-all duration-300 group"
              >
                {/* Card Image */}
                <figure className="border-b-2 border-red-500">
                  <Image
                    src={(await urlFor(post.image)).url()}
                    width={700}
                    height={650}
                    alt={post.image}
                    loading="lazy"
                    className="top-0 group-hover:scale-105 transition-transform duration-700"
                  />
                </figure>

                {/* Card Title & Summary */}
                <div className="card-body p-4 rounded-2xl">
                  <div className="flex items-center h-24 pl-2 py-2 border-l-2 border-red-600 xl:h-28">
                    <h2 className="font-roboto_condensed text-red-900 text-2xl font-bold justify-left">
                      {post.name}
                    </h2>
                  </div>
                  <div className="h-32 md:h-44 3xl:h-32 px-3 md:my-2 text-lg text-left">
                    <PortableText
                      value={post.summaryShort}
                      onMissingComponent={false}
                      components={components}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </section>
      </>
    );
  });
}
