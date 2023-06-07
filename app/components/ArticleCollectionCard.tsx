import Image from "next/image";
import { getPostsArchive } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import TextComponent from "./TextComponent";

export default async function ArticleCollectionCard() {
  const posts = await getPostsArchive();

  const components = TextComponent();

  return posts.map(async (post: any) => {
    return (
      <>
        <section className="flex justify-center">
          <article key={post._id} className="">
            <Link key={post._id} href={`/posts/${post.slug}`}>
              <div
                key={post._id}
                className="card w-full my-5 bg-base-200 shadow-xl hover:shadow-xl hover:shadow-slate-600 hover:drop-shadow hover:transition-all duration-300"
              >
                {/* Card Image */}
                <figure className="border-b-2 border-red-500">
                  <Image
                    src={(await urlFor(post.image)).url()}
                    width={700}
                    height={650}
                    alt={post.image}
                    priority
                  />
                </figure>

                {/* Card Title & Summary */}
                <div className="card-body p-4 rounded-2xl">
                  <div className="flex items-center md:h-20 ml-1 px-5 py-3my-4 border-l-2 border-red-600">
                    <h2 className="font-roboto_condensed text-red-900 text-2xl font-bold justify-left">
                      {post.name}
                    </h2>
                  </div>
                  <div className="h-28 md:h-36 px-3 pt-4 text-md text-justify">
                    <PortableText
                      value={post.summaryShort}
                      onMissingComponent={false}
                      components={components}
                    />
                  </div>
                </div>
              </div>
            </Link>
          </article>
        </section>
      </>
    );
  });
}
