import Image from "next/image";
import { getLatestPostFour } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import TextComponent from "./TextComponent";

export default async function ArticleCardTwo() {
  const post = await getLatestPostFour();

  const components = TextComponent();

  return (
    <Link key={post._id} href={`/posts/${post.slug}`}>
      <div className="card flex flex-col m-5 bg-base-100 shadow-lg shadow-slate-400 rounded-lg md:bg-base-200 md:h-96 md:w-full  md:my-2 md:mx-0 md:card-side hover:shadow-xl hover:shadow-slate-600 hover:drop-shadow hover:transition-all duration-300">
        <div className="h-9/12 ml-4 my-4 border-l-4 border-red-700 md:hidden">
          <h1 className="font-heading text-4xl p-3 text-black font-bold">
            {post.name}
          </h1>
        </div>
        <figure>
          <Image
            src={(await urlFor(post.image)).url()}
            width={900}
            height={700}
            alt={post.image}
            className="className='w-full h-full md:rounded-l-lg"
            priority
          />
        </figure>

        {/* Layer between image and text */}
        <div className="md:absolute md:inset-0 md:bg-gradient-to-r md:from-transparent md:via-transparent md:via-25% md:to-base-200 md:to-70% md:rounded-md"></div>

        {/* Title and article summary */}
        <div className="card-body text-center md:w-96 md:absolute md:flex md:p-4 md:right-0 md:text-right md:rounded-lg transition-all">
          <div>
            <h1 className="hidden text-3xl font-playfair_display md:flex pb-2 top-0 text-red-800 font-semibold">
              {post.name}
            </h1>
          </div>
          <div className="text-justify text-xl md:text-right">
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
