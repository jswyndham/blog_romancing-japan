import { Post } from "@/typings";
import { ImageResponse } from "next/server";
import { createClient, groq } from "next-sanity";
import { readClient } from "@/sanity/config/client-config";
import { Metadata } from "next";
import { urlFor } from "@/lib/urlFor";

type Props = {
  params: { slug: string };
};

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Romancing Japan";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params: { slug },
}: Props): Promise<Metadata> {
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
  summary,
  summaryShort,
  description,
  }`;

  const post: Post = await createClient(readClient).fetch(query, {
    slug,
  });
  // FETCH SANITY DATA AND POST ARTICLES

  return new ImageResponse(
    (
      <>
        {/* ImageResponse JSX element */}
        <div className="relative flex w-full h-full items-center justify-center">
          {/* Background */}
          <div className="absolute flex inset-0">
            <img
              src={post.image + "&w=1200&h=630&auto=format&q=75"}
              alt={post.name}
              className="flex flex-1"
            />

            {/* Overlay */}
            <div className="absolute flex inset-0 bg-black bg-opacity-50 z-10" />
          </div>

          <div className="flex flex-col text-neutral-50">
            {/* Title */}
            <div className="text-7xl font-bold">{post.name}</div>

            {/* Categories */}
            {post.category.map((category) => (
              <div key={category._id}>{category.title}</div>
            ))}

            {/* Tags */}
            {post.tag.map((tag) => (
              <div key={tag._id}>{tag.title}</div>
            ))}
          </div>
        </div>
      </>
    ),
    size
  );
}
