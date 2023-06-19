import React from "react";
import { createClient, groq } from "next-sanity";
import { readClient } from "@/sanity/config/client-config";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import TextComponent from "@/app/components/TextComponent";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next/types";
import { Tag } from "@/typings";

type Props = {
  params: { slug: string };
};

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
    title: tag.title,
    description: tag.description,
    alternates: {
      canonical: `/tags/${tag.slug}`,
    },
    openGraph: {
      title: tag.title,
      description: tag.description,
      type: "article",
      siteName: "Romancing Japan",
    },
    twitter: {
      card: "summary_large_image",
      title: tag.title,
      description: tag.description,
      creator: "@RomancingJapan",
    },
  };
}

export default async function tagPage({ params: { slug } }: Props) {
  const query = groq`*[_type == "tag" && slug.current == $slug][0]
  {..., 
  "slug":slug.current, 
  "post":*[_type=="post" && references(^._id)]{_id, name, "slug": slug.current, "image": image.asset->url, summary, summaryShort}}`;

  const tag = await createClient(readClient).fetch(query, { slug });

  const components = TextComponent();

  return (
    <>
      {/* <Head /> */}
      <main className="flex justify-center h-screen px-8 py-4">
        {/* Banner */}
        <div className="absolute top-32 w-screen font-roboto-condensed text-white bg-slate-700 p-4 -ml-5 flex justify-center text-3xl font-bold">
          <h1>
            Tag: <span className="italic text-red-500">{tag.title}</span>
          </h1>
        </div>

        {/* CARD */}
        <section className="flex justify-center">
          <article
            key={tag._id}
            className="mt-32 md:w-[85%] xl:w-[65%] md:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8 xl:gap-12"
          >
            {tag.post.map(async (post: any) => (
              <Link key={post._id} href={`/posts/${post.slug}`}>
                <div
                  key={tag._id}
                  className="card rounded-none w-fit h-fit mx-2 my-6 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow  hover:bg-base-100 hover:transition-all duration-300 group"
                >
                  {/* Card Image */}
                  <figure className="border-b-2 border-red-500">
                    <Image
                      src={(await urlFor(post.image)).url()}
                      width={700}
                      height={650}
                      alt={post.image}
                      priority
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
                    <div className="h-32 md:h-36 px-3 pt-4 text-md text-justify">
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
          </article>
        </section>
      </main>
    </>
  );
}
