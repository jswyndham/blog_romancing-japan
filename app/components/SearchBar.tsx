"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

// const searchRef = useRef<HTMLInputElement>;

// const [search, setSearch] = useState({ searchInput: "" });

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const searchData = {
//     searchInput: searchRef.current?.value,
//   };

//   await fetch("api/signup", {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(searchData),
//   }).then((res) => {
//     console.log(searchData, "Contact sent");
//   });

//   setSearch({ searchInput: "" });
// };

export default function SearchBar() {
  return (
    <>
      {/* SEARCH BAR */}

      <div className="relative mt-3 mr-14 flex flex-row items-center justify-end">
        <div className="relative">
          <label>search type</label>
          <select className="absolute top-0 py-1 -ml-1 -left-12 bg-base-200">
            <option value="">article heading</option>
            <option value="">category</option>
            <option value="">tags</option>
            <option value="">article contents</option>
          </select>
          <input
            type="text"
            name="search"
            className="py-1 pl-4 w-56 bg-base-200 "
            placeholder="search"
            // value={search.searchInput}
            // ref={searchRef}
          />
          <button
            className="absolute h-8 w-12 py-2 bg-base-200 rounded-r-full"
            type="submit"
            // onClick={() => handleSubmit}
          >
            <Image
              src="/images/search-26.png"
              width={26}
              height={26}
              alt="search"
              className="ml-3 -mt-1"
              priority
            />
          </button>
        </div>
      </div>
    </>
  );
}
