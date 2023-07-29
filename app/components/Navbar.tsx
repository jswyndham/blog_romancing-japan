"use client";

import {
  AiOutlineHome,
  AiOutlineTags,
  AiOutlineMail,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { BsCollection, BsInfoCircle } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const checkOutsideNavbar = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", checkOutsideNavbar);
    return () => {
      document.removeEventListener("click", checkOutsideNavbar);
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="relative h-24 bg-black overflow-hidden">
        {/* Nav for medium size up */}
        <nav className="z-50 mt-1 ml-2 smd:mt-1 flex flex-row justify-between align-middle relative">
          {/* Logo */}

          <Link href="/">
            <Image
              src="/images/logo-nav.png"
              width={240}
              height={200}
              alt="romancing japan logo"
              className="absolute top-4 p-6 -mt-4 -ml-6 md:ml-4 md:p-0 md:mt-0"
              priority
            />
          </Link>

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
          {/* SIDEBAR MENU */}
          {/* Hamburger button */}
          <div className="absolute right-0 top-0 m-3 p-2 xl:hidden">
            <button onClick={handleClick} aria-label="Menu button">
              <Image
                src="/images/hamburger-menu-50.png"
                width={50}
                height={50}
                alt="hamburger menu logo"
                className="z-50 btn-ghost btn-square btn p-2"
              />
            </button>
          </div>
        </nav>

        {/* SLIDE MENU */}
        <nav
          ref={ref}
          className={`${
            !isOpen
              ? "translate-x-full z-50 fixed right-0 top-0 transition ease-in-out duration-300"
              : "translate-x-0 z-50 w-72 fixed right-0 top-0 shadow-2xl shadow-black drop-shadow-xl transition ease-in-out duration-300"
          }`}
        >
          <div className="h-screen pt-14 px-3 bg-gray-800">
            <button
              onClick={handleClick}
              aria-label="Menu button"
              className="absolute z-50 top-0 right-0 m-6 text-white text-2xl hover:text-red-300 focus:text-red-200 focus:font-bold active:text-red-400"
            >
              <AiOutlineCloseSquare />
            </button>
            <ul className="flex flex-col py-3 font-roboto_condensed text-white text-xl text-left">
              <li
                className="
									flex 
									flex-row 
									px-6 
									py-4 
									relative 
									before:content-[''] 
									before:absolute 
									before:bottom-2 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
                  before:-ml-12
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-5/12
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
              >
                <Link onClick={handleClick} href={"/"}>
                  <div className="flex flex-row">
                    <div className="mt-1 pl-2 pr-8">
                      <AiOutlineHome />
                    </div>
                    <div>Home</div>
                  </div>
                </Link>
              </li>

              <li
                className="
									flex 
									flex-row 
									px-6 
									py-4 
									relative 
									before:content-[''] 
									before:absolute 
									before:bottom-2 
									before:left-1/2
									before:-ml-4
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
									hover:before:w-8/12
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
              >
                <Link onClick={handleClick} href={"/blog-collection"}>
                  <div className="flex flex-row">
                    <div className="mt-1 pl-2 pr-8">
                      <BsCollection />
                    </div>
                    <div>Blog Collection</div>
                  </div>
                </Link>
              </li>

              <li
                className="flex 
									flex-row 
									px-6 
									py-4 
									relative 
									before:content-[''] 
									before:absolute 
									before:bottom-2 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1
                  before:-ml-1
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-9/12
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
              >
                <Link onClick={handleClick} href={"/categories"}>
                  <div className="flex flex-row">
                    <div className="mt-1 pl-2 pr-8">
                      <BiCategory />
                    </div>
                    <div>Article Categories</div>
                  </div>
                </Link>
              </li>

              <li
                className="flex 
									flex-row 
									px-6 
									py-4 
									relative 
									before:content-[''] 
									before:absolute 
									before:bottom-2 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
                  before:-ml-6
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-7/12
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
              >
                <Link onClick={handleClick} href={"/tags"}>
                  <div className="flex flex-row">
                    <div className="mt-1 pl-2 pr-8">
                      <AiOutlineTags />
                    </div>
                    <div>Article Tags</div>
                  </div>
                </Link>
              </li>

              <li
                className="flex 
									flex-row 
									px-6 
									py-4 
									relative 
									before:content-[''] 
									before:absolute 
									before:bottom-2 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
                  before:-ml-9
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-6/12
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
              >
                <Link onClick={handleClick} href={"/contact"}>
                  <div className="flex flex-row">
                    <div className="mt-1 pl-2 pr-8">
                      <AiOutlineMail />
                    </div>
                    <div>Contact</div>
                  </div>
                </Link>
              </li>

              <li
                className="flex 
									flex-row 
									px-6 
									py-4 
									relative 
									before:content-[''] 
									before:absolute 
									before:bottom-2 
									before:left-1/2
									before:-translate-x-1/2
									before:w-0 
									before:h-1 
                  before:-ml-9
									before:rounded-xl 
									before:opacity-0 
									before:transition-all 
									before:duration-500
									before:bg-gradient-to-r
									before:from-red-200
									before:via-red-500
									before:to-red-900
									hover:before:w-6/12
									hover:before:opacity-100 
									focus:text-red-200 
									focus:font-bold 
									active:text-red-400"
              >
                <Link onClick={handleClick} href={"/about"}>
                  <div className="flex flex-row">
                    <div className="mt-1 pl-2 pr-8">
                      <BsInfoCircle />
                    </div>
                    <div>About us</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
