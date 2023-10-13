import React from "react";
import { createClient, groq } from "next-sanity";
import { readClient } from "@/sanity/config/client-config";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Metadata } from "next/types";
import { Tag } from "@/typings";
import PortableTextComp from "@/app/components/PortableTextComponents";

type Props = {
  params: { slug: string };
};

// GROQ QUERY WITH METADATA
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const data = groq`*[_type == "tag" && slug.current == $slug][0]
  {title,
  description,
  "slug":slug.current,
  "post":*[_type=="post" && references(^._id)]{_id, name, "slug": slug.current, "image": image.asset->url, summary, summaryShort}}
  `;

  const tag: Tag = await createClient(readClient).fetch(data, { slug });
  return {
    title: `Romancing Japan | ${tag.title}`,
    description: tag.description,
    alternates: {
      canonical: `/tags/${tag.slug}`,
    },
    openGraph: {
      title: `Romancing Japan | ${tag.title}`,
      description: tag.description,
      type: "article",
      siteName: "Romancing Japan",
    },
    twitter: {
      card: "summary_large_image",
      title: `Romancing Japan | ${tag.title}`,
      description: tag.description,
      creator: "@RomancingJapan",
    },
  };
}

// ARTICLE DISPLAY BY TAG
export default async function tagPage({ params: { slug } }: Props) {
  const query = groq`*[_type == "tag" && slug.current == $slug][0]
  {..., 
  "slug":slug.current, 
  "post":*[_type=="post" && references(^._id)]{_id, name, "slug": slug.current, "image": image.asset->url, summary, summaryShort}}`;

  const tag = await createClient(readClient).fetch(query, { slug });

  // RICH TEXT EDITOR SETTINGS
  const components = PortableTextComp();

  return (
    <>
      {/* <Head /> */}
      <main className="flex justify-center h-fit px-8 py-4">
        {/* Banner */}
        <div className="absolute top-32 w-screen font-roboto-condensed text-white bg-slate-700 p-4 -ml-5 flex flex-row justify-center text-3xl font-bold">
          <h1>
            Tag: <span className="italic text-red-500">{tag.title}</span>
          </h1>
        </div>

        {/* CARD */}
        <section className="flex justify-center">
          <article
            key={tag._id}
            className="m-6 md:w-[95%] xl:w-[70%] md:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8"
          >
            <div className="mt-24 md:w-[95%] xl:w-[70%] md:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8">
              {tag.post.map(async (post: any) => (
                <Link key={post._id} href={`/posts/${post.slug}/`}>
                  <div
                    key={tag._id}
                    className="card rounded-none w-fit h-full mx-2 mt-6 mb-8 pb-3 md:pb-0 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow  hover:bg-base-100 hover:transition-all duration-300 group"
                  >
                    {/* Card Image */}
                    <figure className="border-b-2 border-red-500">
                      <Image
                        src={(await urlFor(post.image)).url()}
                        width={700}
                        height={650}
                        alt={post.image}
                        priority={true}
                        className="top-0 group-hover:scale-105 transition-transform duration-700"
                      />
                    </figure>

                    {/* Card Title & Summary */}
                    <div className="card-body p-4 rounded-2xl">
                      <div className="flex items-center h-24 pl-2 mt-1 mb-2 border-l-2 border-red-600 xl:h-28">
                        <h2 className="font-roboto_condensed text-red-900 text-2xl font-bold justify-left">
                          {post.name}
                        </h2>
                      </div>
                      <div className="h-36 my-2 px-3 text-lg text-left md:h-44 3xl:h-32 md:my-2">
                        <PortableText
                          value={post.summaryShort}
                          onMissingComponent={false}
                          components={components}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
