import Image from "next/image";
import { getPostByCategory } from "@/sanity/sanity-utils";
import { urlFor } from "@/lib/urlFor";
import { createClient, groq } from "next-sanity";
import { Category } from "@/typings";
import clientConfig from "@/sanity/config/client-config";

type Props = {
  "slug": { slug: string };
};

export default async function BlogSmallCard({ "slug": { slug } }: Props) {

  const query = groq`*[_type == "category" && slug.current == $slug]{
  _id, title,"slug":slug.current,
  "post": *[_type == "post" && references(^._id)]{
  _id,
  name,
  "image": image.asset->url,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..150], "") + "...",}
  }
  

  const category: Category = await createClient(clientConfig).fetch(query, { slug });

  return posts.map(async (post) => {
    return (
      <div className='card w-52 m-2 bg-base-100 shadow-xl'>
        <figure className='h-28 border-b-2 border-red-500 '>
          {/* <Image
            src={(await urlFor(post.image)).url()}
            width={320}
            height={220}
            alt={post.image}
          /> */}
        </figure>

        <div className='card-body'>
          <h2 className='card-title'>{post.name}</h2>
          <p>{post.excerpt}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-xs btn-outline btn-success'>
              read more
            </button>
          </div>
        </div>
      </div>
  )
  })