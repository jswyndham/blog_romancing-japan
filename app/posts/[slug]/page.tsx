import { createClient, groq } from "next-sanity";
import Image from "next/image";
import { Post } from "../../../typings";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/urlFor";
import { readClient } from "@/sanity/config/client-config";
import Link from "next/link";
import { Metadata } from "next";
import TextComponent from "@/app/components/TextComponent";
import LatestArticlesMini from "@/app/components/LatestArticlesMini";
import SignupCardLong from "@/app/components/SignupCardLong";

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

  const post: Post = await createClient(readClient).fetch(query, {
    slug,
  });

  // RETURN METADATA
  return {
    title: post.name,
    description: post.description,
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
    openGraph: {
      title: post.name,
      description: post.description,
      type: "article",
      siteName: "Romancing Japan",
    },
    twitter: {
      card: "summary_large_image",
      title: post.name,
      description: post.description,
      creator: "@RomancingJapan",
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

  const post: Post = await createClient(readClient).fetch(query, { slug });

  return (
    <>
      {/* SUBSCRIPTION CARD */}
      <section className="w-screen flex items-center justify-start">
        <SignupCardLong />
      </section>
      <main
        key={post._id}
        className="flex flex-col items-center justify-center xl:items-start xl:flex-row"
      >
        <section className="md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[30%] flex flex-col justify-center">
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
                  <div key={post._id}>
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
          <article className="container">
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

        <section className="flex flex-col md:w-[85%] xl:w-[20%] 2xl:w-[15%] mt-4 items-start justify-start">
          {/* AUTHOR BIO */}
          <article className="mt-4 xl:border-l-4 xl:border-r-4 border-white">
            <div className="flex flex-col px-4">
              <div className="ml-6">
                <h3 className="text-4xl font-playfair_display font-bold">
                  Author Bio
                </h3>
              </div>
              <>
                {post.author.map(async (author) => (
                  <div key={author._id} className="relative">
                    <figure className="absolute my-4">
                      <Image
                        src={(await urlFor(author.image)).url()}
                        alt={post.name}
                        width={900}
                        height={900}
                        className="object-fill rounded-xl p-3"
                        priority
                      />
                    </figure>
                    <div className="bg-slate-200 px-4 pt-16 pb-6 mt-36 font-heading text-justify text-xl whitespace-pre-line p-2">
                      <PortableText
                        value={author.biography}
                        onMissingComponent={false}
                        components={components}
                        className="whitespace-pre-line"
                      />
                    </div>
                  </div>
                ))}
              </>
            </div>
            <div className="divider mb-1"></div>
          </article>

          {/* SIDE MENU LATEST ARTICLES */}
          <article className="flex flex-col px-4 xl:border-l-4 xl:border-r-4 border-white">
            <div className="ml-6">
              <h3 className="text-4xl font-playfair_display font-bold">
                Latest Posts
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:flex xl:flex-col my-4">
              <LatestArticlesMini />
            </div>

            
          </article>
        </section>
      </main>
    </>
  );
}
