import React from "react";
import ArticleCollectionCard from "../components/ArticleCollectionCard";

export const metadata = {
  title: "Article Collection",
  description: "A collection of articles from Romancing Japan.",
  openGraph: {
    title: "Article Collection",
    description: "A collection of articles from Romancing Japan.",
    type: "website",
    siteName: "Romancing Japan",
  },
};

export default function page() {
  return (
    <>
      <main className="flex justify-center px-8 py-4">
        {/* Banner */}
        <div className="absolute top-32 w-screen font-roboto-condensed text-white bg-slate-700 p-4 -ml-5 flex justify-center text-3xl font-bold">
          <h1>Article Collection</h1>
        </div>
        <section className="mt-24 md:w-[95%] xl:w-[70%] md:grid md:grid-cols-2 2xl:grid-cols-3 md:gap-8">
          {/* CARD */}

          <ArticleCollectionCard />
        </section>
      </main>
    </>
  );
}
