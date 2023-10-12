import Image from "next/image";
import { getPostsSmallCard } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import PortableTextComp from "./PortableTextComponents";

export default async function BlogSmallCard() {
  const posts = await getPostsSmallCard();

  // RICH TEXT EDITOR
  const components = PortableTextComp();

  return posts.map(async (post: any) => {
    return (
      <Link key={post._id} href={`/posts/${post.slug}/`}>
        <div className="card rounded-none w-fit h-fit mx-2 my-2 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow  hover:bg-base-100 hover:transition-all duration-300 group">
          <figure className="border-b-2 border-red-500">
            <Image
              src={(await urlFor(post.image)).url()}
              width={700}
              height={650}
              alt={post.image}
              loading="lazy"
              className="top-0 group-hover:scale-105 transition-transform duration-700"
            />
          </figure>
          <div className="card-body p-4 my-1 rounded-2xl h-fit">
            <div className="flex items-center h-24 pl-2 border-l-2 border-red-600 xl:h-28">
              <h2 className="font-roboto_condensed text-red-900 text-2xl font-bold">
                {post.name}
              </h2>
            </div>
            <div className="h-40 md:h-44 lg:h-48 xl:h-40 pl-3 my-3 pr-1 text-lg text-left md:items-center xl:py-4">
              <PortableText
                value={post.summaryShort}
                onMissingComponent={false}
                components={components}
              />
            </div>
          </div>
        </div>
      </Link>
    );
  });
}
