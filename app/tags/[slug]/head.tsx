import { createClient, groq } from "next-sanity";
import React from "react";
import { Metadata } from "next";
import clientConfig from "@/sanity/config/client-config";

type Props = {
  params: { slug: string };
};

export default async function Head({
  params: { slug },
}: Props): Promise<Metadata> {
  const query = groq`*[_type == "tag" && slug.current == $slug][0]
    {title, 
    description,
    "slug":slug.current, 
    }`;

  const data = await createClient(clientConfig).fetch(query, { slug });
  return { title: data.title };

  // return (
  //   <>
  //     <title>`Romancing Japan | Search by Tag: ${tag.slug}`</title>
  //     <meta content="width=device-width, initial-scale=1" name="viewport" />
  //     <meta name="description" content="Romancing Japan Tag Search" />
  //     <link rel="icon" href="/favicon.ico" />
  //   </>
  // );
}
