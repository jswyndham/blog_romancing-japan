import Image from "next/image";
import { getLatestPostTwo } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import TextComponent from "./TextComponent";

export default async function ArticleCardTwo() {
  const post = await getLatestPostTwo();

  const components = TextComponent();

  return (
    <Link key={post._id} href={`/posts/${post.slug}`}>
      <div className="flex flex-col m-5 bg-base-300 shadow-lg shadow-slate-400 rounded-lg md:ml-0 md:bg-base-100 lg:card-side md:card md:w-fit hover:shadow-xl hover:shadow-slate-500 hover:transition-all duration-300">
        <div className="h-9/12 ml-4 my-4 border-l-4 border-red-700 md:hidden">
          <h1 className="font-playfair_display text-3xl p-3 text-red-900 font-bold">
            {post.name}
          </h1>
        </div>
        <figure className="md:top-0">
          <Image
            src={(await urlFor(post.image)).url()}
            width={900}
            height={700}
            alt={post.image}
            className="md:rounded-t-lg"
            priority
          />
        </figure>

        {/* Title and article summary */}
        <div className="card-body md:bg-base-200">
          <div>
            <h1 className="hidden text-3xl font-playfair_display text-red-900 font-bold md:flex">
              {post.name}
            </h1>
          </div>
          <div className="text-justify">
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
