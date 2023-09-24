import { createArticle } from "@/sanity/sanity-utils";
import Link from "next/link";
import React from "react";

type Props = {
  params: { slug: string };
};

async function CategoriesAndTags({ params: { slug } }: Props) {
  const post = await createArticle({ params: { slug } });

  return (
    <div className="w-full ml-4 flex flex-col gap-1 items-start justify-start font-bold">
      <div className="flex flex-col pt-1">
        <div>
          {/* Categories */}
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

      <div className="flex flex-col justify-start my-1">
        {/* Tags */}
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
    </div>
  );
}

export default CategoriesAndTags;
