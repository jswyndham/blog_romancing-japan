import { createClient, groq } from "next-sanity";
import Image from "next/image";
import { Post } from "../../../typings";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/urlFor";
import clientConfig from "@/sanity/config/client-config";
import Link from "next/link";
import { Metadata } from "next";
import TextComponent from "@/app/components/TextComponent";
import { getLatestPostMini } from "@/sanity/sanity-utils";

type Props = {
  params: { slug: string };
};

// FOR PORTABLE TEXT COMPONENT
const components = TextComponent();

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
  "image": image.asset->url,
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

  const post: Post = await createClient(clientConfig).fetch(query, {
    slug,
  });

  // RETURN METADATA
  return {
    title: post.name,
    description: post.description,
    openGraph: {
      title: post.name,
      description: post.description,
      type: "article",
      siteName: "Romancing Japan",
    },
  };
}

// FETCH SANITY DATA AND POST ARTICLES
export default async function postArticle({ params: { slug } }: Props) {
  const query = groq`*[_type=="post" && slug.current == $slug][0]
    {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
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
  }`;

  const post: Post = await createClient(clientConfig).fetch(query, { slug });

  const latestPostList = getLatestPostMini();

  return (
    <>
      <main key={post._id} className="flex justify-center">
        <section className="md:w-[85%] lg:w-[65%] xl:w-[40%] 2xl:w-[35%]flex flex-col justify-center">
          {/* TOP BOARDER, TITLE, AUTHOR */}
          <article className="flex flex-col items-center justify-center">
            <div className="container ">
              <div className="relative h-8 mt-6 p-3 divide-y divide-red-700">
                <div className="h-1"></div>
                <div className="h-1"></div>
                <div className="h-1"></div>
                <div className="h-1"></div>
              </div>

              <div className="flex flex-col">
                <h1 className="mt-2 text-5xl ml-5 p-1 font-heading font-bold sm:text-6xl">
                  {post.name}
                </h1>
                {post.author.map((author) => (
                  <div key={post._id} className="">
                    <h4 className="ml-8 mt-3 pb-1 text-primary text-md font-bold">
                      Written by {author.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* CATEGORIES & TAGS */}
          <article className="w-6/12 ml-4 flex flex-col items-start justify-center">
            <div className="flex flex-col pt-2 my-3">
              <div>
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

            <div className="flex flex-col justify-start my-3">
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
          </article>

          {/* IMAGE */}
          <article>
            <figure className="relative flex justify-center mx-2 my-6">
              <Image
                src={(await urlFor(post.image)).url()}
                alt={post.name}
                width={900}
                height={900}
                className="w-full mx-14 shadow-xl shadow-slate-500"
                priority
              />
            </figure>
          </article>

          {/* ARTICLE BODY */}
          <article>
            <div className="container">
              <article className="flex flex-col justify-center whitespace-pre-line md:flex-row">
                <div className="lg:w-11/12 px-8 py-4">
                  <div className="font-heading text-justify text-xl whitespace-pre-line">
                    <PortableText
                      value={post.content}
                      onMissingComponent={false}
                      components={components}
                      className="whitespace-pre-line"
                    />
                  </div>
                </div>
              </article>
            </div>
          </article>
          <article className="">
            <div className="h-8 mb-12 p-3 divide-y divide-red-700">
              <div className="h-1"></div>
              <div className="h-1"></div>
              <div className="h-1"></div>
              <div className="h-1"></div>
            </div>
          </article>
        </section>
        <section className="w-[15%] mt-96 border-l-2 border-r-2 border-slate-800">
          <article className="px-4">
            <div><h3 className="text-3xl font-bold">Latest Posts</h3></div>
          </article>
        </section>
      </main>
    </>
  );
}
