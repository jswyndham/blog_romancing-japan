import Image from "next/image";
import { getLatestPostOne } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import TextComponent from "./TextComponent";

export default async function ArticleCardOne() {
  const post = await getLatestPostOne();

  const components = TextComponent();

  return (
    <Link key={post._id} href={`/posts/${post.slug}`}>
      {/* Card with responsive sizes */}
      <div className="flex flex-col m-5 bg-base-100 shadow-lg shadow-slate-500 rounded-lg md:rounded-md md:bg-base-300 md:flex-row md:my-4 md:mx-0 md:h-96 md:w-full md:card lg:card-side hover:shadow-xl hover:shadow-slate-600 hover:drop-shadow hover:transition-all duration-300 group">
        {/* Title only visible in mobile/small window */}
        <div className="h-9/12 ml-4 my-4 border-l-4 border-red-700 md:hidden">
          <h1 className="font-heading text-4xl p-3 text-black font-bold md:hidden">
            {post.name}
          </h1>
        </div>

        {/* Display image */}
        <figure>
          <Image
            src={(await urlFor(post.image)).url()}
            width={900}
            height={700}
            alt={post.image}
            className="w-full h-full md:rounded-l-md"
            priority
          />
        </figure>
        {/* Layer between image and text */}
        <div className="md:absolute md:inset-0 md:bg-gradient-to-r md:from-transparent md:via-transparent md:via-25% md:to-base-200 md:to-75% lg:to-65% xl:to-60% md:rounded-md"></div>

        {/* Title and article summary */}
        <div className="card-body md:w-80 md:absolute md:flex md:p-4 md:right-0 text-center transition-all">
          {/* Title only visible from medium size up */}
          <div>
            <h1 className="hidden md:flex pb-2 text-4xl font-playfair_display top-0 text-right text-red-800 font-extrabold">
              {post.name}
            </h1>
          </div>

          {/* Text summary field */}
          <div className="text-justify text-xl md:text-right md:bottom-0">
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
