import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Categories from "./Categories";
import Tags from "./Tags";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="h-fit bg-slate-700 flex flex-row justify-between align-middle md:w-2/3">
        <button
          onClick={handleClick}
          className={`${
            !isOpen
              ? "font-bold bg-green-600 border-4 border-purple-300 rounded-lg"
              : "font-bold text-white bg-orange-300 border-2 border-slate-600 rounded-md"
          }`}
        >
          Press Me
        </button>
        <div className="mt-2 px-2 py-2 md:mt-8">
          <Link href="/">
            <Image
              src="/images/logo-nav.png"
              width={200}
              height={150}
              alt="romancing japan logo"
            />
          </Link>
        </div>

        {/* Nav menu */}
        <nav>
          <ul className="hidden justify-around px-4 font-bold text-white md:flex md:flex-row">
            <li className="p-6">
              <Link href={"/archive"}>Archive</Link>
            </li>
            <li className="px-6">
              <Categories />
            </li>
            <li className="px-6">
              <Tags />
            </li>
          </ul>
        </nav>

        <button
          onClick={() => {
            handleClick;
          }}
          className={`${
            !isOpen
              ? "btn-ghost btn-square btn md:hidden"
              : "btn-ghost btn-square btn bg-slate-600 m-6 md:hidden"
          }`}
        >
          <Image
            src="/images/hamburger-menu-50.png"
            width={50}
            height={50}
            alt="romancing japan logo"
            className="btn-ghost btn-square btn w-9 h-5"
          />
        </button>

        <nav
          className={`${
            !isOpen
              ? "hidden"
              : "h-screen z-10 absolute top-0 right-0 w-[45%] pt-14 bg-slate-600"
          }`}
        >
          <button
            onClick={() => {
              handleClick;
            }}
            className="absolute top-0 right-0 m-3 text-white font-bold"
          >
            X
          </button>
          <ul className="flex flex-col py-3 font-bold text-white text-right">
            <li className="px-6">
              <Link href={"/archive"}>Archive</Link>
            </li>
            <li className="px-6 cursor-pointer">
              <Categories />
            </li>
            <li className="px-6 cursor-pointer">
              <Tags />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

// export default async function Navbar() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const handleClick = () => {
// 	  setIsOpen(!isOpen);
// 	};

// 	return (
// 	  <header className="h-fit bg-black flex flex-row justify-between align-middle">
// 		<Link href="/">
// 		  <Image
// 			src="/images/logo-nav.png"
// 			width={250}
// 			height={200}
// 			alt="romancing japan logo"
// 			className="p-3"
// 		  />
// 		</Link>
// 		<div>
// 		  <button onClick={handleClick}>
// 			<Image
// 			  src="/images/hamburger-menu-50.png"
// 			  width={50}
// 			  height={50}
// 			  alt="romancing japan logo"
// 			  className="btn-ghost btn-square btn p-2 m-2"
// 			/>
// 		  </button>
// 		</div>
// 		<nav
// 		  className={`${
// 			isOpen
// 			  ? "hidden"
// 			  : "absolute z-10 right-0 top-0 w-[45%] h-screen flex flex-col bg-gray-800 p-3 font-bold"
// 		  }`}
// 		>
// 		  <button
// 			onClick={handleClick}
// 			className="absolute right-0 top-0 p-6 text-white hover:text-red-300 focus:text-red-500"
// 		  >
// 			X
// 		  </button>
// 		</nav>
// 	  </header>
// 	);
//   }
