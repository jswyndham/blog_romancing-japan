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
      <div className="card flex flex-col m-5 bg-base-300 shadow-lg shadow-slate-400 rounded-lg md:bg-base-200 md:h-full md:w-full md:my-2 md:ml-0 md:mr-3 md:mb-3 md:card-side hover:shadow-xl hover:shadow-slate-500 hover:transition-all duration-300">
        <div className="h-9/12 ml-4 my-4 border-l-4 border-red-700 md:hidden">
          <h1 className="font-playfair_display text-3xl p-3 text-red-900 font-bold">
            {post.name}
          </h1>
        </div>
        <figure>
          <Image
            src={(await urlFor(post.image)).url()}
            width={900}
            height={700}
            alt={post.image}
            className="className='w-full h-full md:rounded-lg"
            priority
          />
        </figure>

        {/* Layer between image and text */}
        <div className="md:absolute md:inset-0 md:bg-gradient-to-b md:from-transparent md:via-transparent md:via-25% md:to-base-200 md:to-70% xl:to-80% md:rounded-lg"></div>

        {/* Title and article summary */}
        <div className="card-body text-center md:w-full md:absolute md:flex md:p-4 md:bottom-0 md:text-left md:rounded-lg transition-all">
          <div>
            <h1 className="hidden text-3xl font-playfair_display md:flex text-red-800 font-semibold">
              {post.name}
            </h1>
          </div>
          <div className="text-justify text-xl md:text-left md:rounded-b-lg">
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