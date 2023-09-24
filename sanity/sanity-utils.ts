import { Post, Category, Author } from "../typings";
import { createClient, groq } from "next-sanity";
import { readClient } from "./config/client-config";

type Props = {
  params: { slug: string };
};

// Medium post cards on home page
export async function getLatestPostOne(): Promise<Post> {
  return createClient(readClient)
    .fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[0]`);
}

export async function getLatestPostTwo(): Promise<Post> {
  return createClient(readClient)
    .fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[1]`);
}

export async function getLatestPostThree(): Promise<Post> {
  return createClient(readClient)
    .fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[2]`);
}

export async function getLatestPostFour(): Promise<Post> {
  return createClient(readClient)
    .fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[3]`);
}

// Small post cards on home page
export async function getPostsSmallCard(): Promise<Post[]> {
  return createClient(readClient)
    .fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..150], "") + "...",
  summary,
  summaryShort,
  author[]->,
  category[]->,
  tag[]->,  
  }[3..5]`);
}

export async function getPostsArchive(): Promise<Post[]> {
  return createClient(readClient)
    .fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary,
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..150], "") + "...",
  author[]->,
  category[]->,
  tag[]->,
  }`);
}

// Medium post cards on home page
export async function getLatestPostMini(): Promise<Post> {
  return createClient(readClient)
    .fetch(groq`*[_type == "post"] | order(_createdAt desc){
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content,
  summary[]{
    ...,
  },
  summaryShort,
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->,
  tag[]->,  
  }[0..4]`);
}

export async function getCategories(): Promise<Category[]> {
  return createClient(readClient)
    .fetch(groq`*[_type == "category"] | order(_createdAt desc){
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description 
  }`);
}

export async function getTags(): Promise<Post[]> {
  return createClient(readClient)
    .fetch(groq`*[_type == "tag"] | order(_createdAt desc){
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description 
  }`);
}

export async function getAuthor(): Promise<Author[]> {
  return createClient(readClient)
    .fetch(groq`*[_type == "author"] | order(_createdAt desc){
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  "image": image.asset->url,
  description 
  }`);
}

export async function createArticle({
  params: { slug },
}: Props): Promise<Post> {
  const revalidate = 3600; //Time interval
  const query = groq`*[_type=="post" && slug.current == $slug][0]
    {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  image{...},
  "caption": image.caption,
  url,
  content[]{
    ...,
    image[] => {
      ...,
      caption, 
      asset->
    }
  },
  "excerpt": array::join(string::split((pt::text(content)), "")[0..200], "") + "...",
  author[]->,
  category[]->{title, "slug": slug.current,},
  tag[]->{title, "slug": slug.current,},
  }`;

  return await createClient(readClient).fetch(query, { slug, revalidate });
}
