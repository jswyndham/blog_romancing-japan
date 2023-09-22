import { createClient, groq } from "next-sanity";
import Image from "next/image";
import { Post } from "../../../typings";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/urlFor";
import { readClient } from "@/sanity/config/client-config";
import Link from "next/link";
import { Metadata } from "next";
import SignupCardLong from "@/app/components/SignupCardLong";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import PortableTextComp from "@/app/components/PortableTextComponents";
import SideBioSubscriptionLatestArt from "@/app/components/SideBioSubscriptionLatestArt";
import { createArticle } from "@/sanity/sanity-utils";

type Props = {
  params: { slug: string };
};

// DYNAMIC METADATA TAGS
export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const query = groq`*[_type=="post" && slug.current == $slug][0]
    {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image":image.asset->url, 
  url,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->{title, "slug": slug.current,},
  tag[]->{title, "slug": slug.current,},
  summary,
  summaryShort,
  description,
  }`;

  const post: Post = await createClient(readClient).fetch(query, {
    slug,
  });

  // RETURN METADATA
  return {
    title: post.name,
    description: post.description,
    alternates: {
      canonical: `https://www.romancing-japan.com/posts/${post.slug}`,
    },
    openGraph: {
      title: post.name,
      description: post.description,
      type: "article",
      images: { url: post.image, width: 600, height: 400 },
      siteName: "Romancing Japan",
      url: `https://www.romancing-japan.com/posts/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.name,
      description: post.description,
      creator: "@RomancingJapan",
      images: { url: post.image, width: 600, height: 400 },
    },
  };
}

// ARTICLE LAYOUT
export default async function postArticle({ params: { slug } }: Props) {
  // FETCH SANITY UTILITIES
  const post = await createArticle({ params: { slug } });

  // RICH TEXT EDITOR
  const components = PortableTextComp();

  return (
    <main
      key={post._id}
      className="flex flex-col items-center justify-center xl:items-start xl:flex-row"
    >
      <section className="mx-4 md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[40%] flex flex-col justify-center">
        {/* TOP BOARDER */}
        <article className="flex flex-col items-center justify-center">
          <div className="container ">
            <div className="relative h-8 mt-6 p-3 divide-y divide-red-700">
              <div className="h-1"></div>
              <div className="h-1"></div>
              <div className="h-1"></div>
              <div className="h-1"></div>
            </div>

            {/* CATEGORIES & TAGS */}
            <div className="w-full ml-4 flex flex-col gap-1 items-start justify-start font-bold">
              <div className="flex flex-col pt-1">
                <div>
                  {/* Categories */}
                  <div className="flex flex-row justify-start align-middle w-fit h-8 border-t-2 border-b-2 border-white">
                    {post.category.map((category) => (
                      <div
                        key={category._id}
                        className="mx-3 px-3 pt-1 font-cardHeading text-red-700 text-md"
                      >
                        <Link href={`/categories/${category.slug}`}>
                          {category.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-start my-1">
                {/* Tags */}
                <div className="flex flex-row justify-start align-middle w-fit h-8 border-t-2 border-b-2 border-white">
                  {post.tag.map((tag) => (
                    <div
                      key={tag._id}
                      className="mx-3 px-3 pt-1 font-catTags text-info text-md"
                    >
                      <Link href={`/tags/${tag.slug}`}>{tag.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TITLE */}
            <div className="flex flex-col">
              <h1 className="mt-2 text-4xl md:text-5xl ml-5 p-1 font-heading font-bold">
                {post.name}
              </h1>

              {/* AUTHOR */}
              {post.author.map((author) => (
                <div key={post._id}>
                  <p className="ml-8 mt-3 pb-1 text-primary text-lg font-bold">
                    {author.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* IMAGE */}
        <article>
          <figure className="flex flex-col justify-center my-6">
            <Image
              src={(await urlFor(post.image)).url()}
              alt={post.name}
              width={900}
              height={900}
              className="w-full  shadow-lg shadow-slate-500"
              loading="lazy"
            />

            <figcaption className="italic text-base text-left mt-2">
              {post.caption}
            </figcaption>
          </figure>
        </article>

        {/* ARTICLE BODY */}
        <article className="container">
          <div className="flex flex-col justify-center whitespace-pre-line md:flex-row">
            <div className="lg:w-11/12 px-4 py-4 font-heading text-left text-xl 2xl:text-2xl whitespace-pre-line">
              <PortableText
                value={post.content}
                onMissingComponent={false}
                components={components}
              />
            </div>
          </div>
        </article>

        {/* SUBSCRIBE CARD @ SM - LG */}
        <section className="w-screen flex items-center justify-start xl:hidden">
          <SignupCardLong />
        </section>

        {/* BOTTOM BORDER */}
        <article className="">
          <div className="h-8 mb-12 p-3 divide-y divide-red-700">
            <div className="h-1"></div>
            <div className="h-1"></div>
            <div className="h-1"></div>
            <div className="h-1"></div>
          </div>
        </article>
      </section>

      {/* SIDE / BOTTOM SECTION */}

      <section className="flex flex-col xl:max-w-xs md:w-[80%] mt-4 items-start justify-start">
        <SideBioSubscriptionLatestArt
          params={{
            slug: slug,
          }}
        />
      </section>
    </main>
  );
}
