import React from "react";
import BlogLargeCard from "../components/BlogLargeCard";

export default function page() {
  return (
    <main className='px-24 py-10'>
      <div className='grid grid-cols-3 gap-4 py-8'>
        <BlogLargeCard />
      </div>
    </main>
  );
}
