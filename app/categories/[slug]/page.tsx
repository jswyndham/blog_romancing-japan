import React from "react";
import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";
import Image from "next/image";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import TextComponent from "@/app/components/TextComponent";

type Props = {
  params: { slug: string };
};

// GROQ query parameters
export default async function categoryPage({ params: { slug } }: Props) {
  const query = groq`*[_type == "category" && slug.current == $slug][0]
  {..., 
  "slug":slug.current,
  "post":*[_type=="post" && references(^._id)]{_id, name, "slug": slug.current, "image": image.asset->url, summary, summaryShort}}`;

  const category = await createClient(clientConfig).fetch(query, { slug });

  const components = TextComponent();

  return (
    <main className="flex items-center justify-center px-8 py-4">
      {/* Banner */}
      <div className="absolute top-32 w-screen -ml-8 p-2 font-roboto-condensed text-white bg-slate-700 text-xl text-center">
        <h1>Category: {category.title}</h1>
      </div>

      {/* CARD */}
      <div className="flex items-center content-center justify-center ">
        <article
          key={category._id}
          className="mt-24 md:w-[85%] xl:w-[75%] md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-4 xl:gap-6 md:py-8"
        >
          {category.post.map(async (post: any) => (
            <Link key={post._id} href={`/posts/${post.slug}`}>
              <div
                key={category._id}
                className="card w-full my-3 bg-base-200 shadow-xl hover:shadow-xl hover:shadow-slate-600 hover:drop-shadow hover:transition-all duration-300"
              >
                {/* Card Image */}
                <figure className="h-44 border-b-2 border-red-500">
                  <Image
                    src={(await urlFor(post.image)).url()}
                    width={700}
                    height={650}
                    alt={post.image}
                    priority
                  />
                </figure>

                {/* Card Title & Summary */}
                <div className="card-body p-4 rounded-2xl">
                  <div className="flex items-center md:h-20 ml-1 px-5 py-3my-4 border-l-2 border-red-600">
                    <h2 className="font-roboto_condensed text-red-900 text-2xl font-bold justify-left">
                      {post.name}
                    </h2>
                  </div>
                  <div className="h-28 md:h-36 px-3 pt-4 text-md text-justify">
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
      </div>
    </main>
  );
}
