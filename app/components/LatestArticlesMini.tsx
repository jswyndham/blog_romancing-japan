import Image from "next/image";
import { getLatestPostMini } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";

export default async function BlogSmallCard() {
  const posts = getLatestPostMini();

  return (await posts).map(async (post: any) => {
    return (
      <Link key={post._id} href={`/posts/${post.slug}`}>
        <div className="card rounded-none w-fit h-fit mx-2 my-1 hover:shadow-lg hover:shadow-slate-200 hover:drop-shadow  hover:bg-base-100 hover:transition-all duration-300 group">
          <figure className="">
            <Image
              src={(await urlFor(post.image)).url()}
              width={700}
              height={650}
              alt={post.image}
              loading="lazy"
              className="top-0 group-hover:scale-105 transition-transform duration-700"
            />
          </figure>
          <div className="card-body p-4 my-2 h-fit">
            <div className="flex items-center max-h-28 min-h-16 pl-2 py-2 border-l-2 border-red-600 xl:h-28">
              <h2 className="font-roboto_condensed text-red-900 text-2xl font-bold">
                {post.name}
              </h2>
            </div>

            {/* CATEGORIES & TAGS */}
            {/* <div className="flex flex-col pt-2 my-3">
              <div>
                <div className="flex flex-row justify-start align-middle w-fit h-8 border-t-2 border-b-2 border-white">
                  {(await posts).category.map((category) => (
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
            </div> */}
          </div>
        </div>
        <div className="divider mb-1"></div>
      </Link>
    );
  });
}
