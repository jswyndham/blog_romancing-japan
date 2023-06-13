import Image from "next/image";
import { getPostsSmallCard } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import TextComponent from "./TextComponent";

export default async function BlogSmallCard() {
  const posts = await getPostsSmallCard();

  const components = TextComponent();

  return posts.map(async (post: any) => {
    return (
      <Link key={post._id} href={`/posts/${post.slug}`}>
        <div className="card w-fit h-fit mx-2 my-4 bg-base-100 rounded-md shadow-lg shadow-slate-400 md:my-2 hover:bg-base-200 hover:shadow-xl hover:shadow-slate-500 hover:transition-all duration-300 group">
          <figure className="h-44 border-b-2 border-red-500">
            <Image
              src={(await urlFor(post.image)).url()}
              width={700}
              height={650}
              alt={post.image}
              priority
              className="top-0 group-hover:scale-105 transition-transform duration-700"
            />
          </figure>
          <div className="card-body p-4 my-2 rounded-2xl h-fit">
            <div className="flex items-center h-24 ml-1 pl-5 pr-2 py-2 border-l-2 border-red-600 xl:h-28">
              <h2 className="font-roboto_condensed text-red-900 text-2xl font-bold">
                {post.name}
              </h2>
            </div>
            <div className="h-24 md:h-44 lg:h-48 xl:h-40 pl-3 py-4 pr-1 text-md text-left md:items-center xl:py-4">
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
