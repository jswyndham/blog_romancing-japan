import Link from "next/link";
import React from "react";

function NavbarMenuLarge() {
  return (
    <div className="hidden xl:flex smd: flex-col gap-2">
      {/* NAVBAR MENU */}
      <ul className="flex flex-row py-3 lg:space-x-8 xl:space-x-14 2xl:space-x-20 mr-3 mt-6 lg:mr-6 xl:mr-9 2xl:mr-16 font-roboto_condensed text-white text-xl">
        <li
          className="
									relative 
									inline-block 
									before:content-[''] 
									before:absolute 
									before:-bottom-1 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-full 
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
        >
          <Link href={"/"}>
            <h4>Home</h4>
          </Link>
        </li>

        <li
          className="relative 
									inline-block 
									before:content-[''] 
									before:absolute 
									before:-bottom-1 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-full 
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
        >
          <Link href={"/blog-collection"}>
            <h4 className="">Blog Collection</h4>
          </Link>
        </li>

        <li
          className="relative 
									inline-block 
									before:content-[''] 
									before:absolute 
									before:-bottom-1 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-full 
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
        >
          <Link href={"/categories"}>
            <h4>Article Categories</h4>
          </Link>
        </li>

        <li
          className="relative  
									inline-block 
									before:content-[''] 
									before:absolute 
									before:-bottom-1 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-full 
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
        >
          <Link href={"/tags"}>
            <h4>Article Tags</h4>
          </Link>
        </li>

        <li
          className="relative 
									inline-block 
									before:content-[''] 
									before:absolute 
									before:-bottom-1 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-full 
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
        >
          <Link href={"/contact"}>
            <h4>Contact</h4>
          </Link>
        </li>

        <li
          className="relative 
									inline-block 
									before:content-[''] 
									before:absolute 
									before:-bottom-1 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-full 
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
        >
          <Link href={"/about"}>
            <h4>About us</h4>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMenuLarge;
