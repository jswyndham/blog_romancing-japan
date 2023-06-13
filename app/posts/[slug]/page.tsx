import { createClient, groq } from "next-sanity";
import Image from "next/image";
import { Post } from "../../../typings";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/lib/urlFor";
import clientConfig from "@/sanity/config/client-config";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

const RichTextComponents = async ({ value }: any) => {
  return (
    <div className="w-full h-full my-6">
      <Image
        src={(await urlFor(value)).url()}
        alt={value.name}
        width={750}
        height={600}
        priority
      />
    </div>
  );
};

const components = {
  types: {
    image: RichTextComponents,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
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
      <h4 className="text-xl pt-7 pb-3 font-extrabold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-[#CA3433] border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  // hardBreak: {
  //   break: ({ children }: any): JSX.Element => {
  //     if (children.length === 1 && children[0] === "") {
  //       return <br />;
  //     }
  //     return <p>{children}</p>;
  //   },
  // },

  marks: {
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),

    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          ref={value.href}
          rel={rel}
          className="underline decoration-[#CA3433] hover:decoration-black"
          href={""}
        >
          {children}
        </Link>
      );
    },
  },
};

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

  return (
    <main key={post._id} className="flex items-center justify-center">
      <section className="md:w-8/12 lg:w-6/12 xl:w-5/12 flex flex-col justify-center">
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
          <figure className="relative flex justify-center mx-2 my-6 md:mx12">
            <Image
              src={(await urlFor(post.image)).url()}
              alt={post.name}
              width={750}
              height={600}
              className="shadow-xl shadow-slate-500"
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
    </main>
  );
}
