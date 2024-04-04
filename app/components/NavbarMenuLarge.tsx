import Link from "next/link";
import React from "react";

function NavbarMenuLarge() {
  return (
    <div className="hidden xl:flex smd: flex-col gap-2">
      {/* NAVBAR MENU */}
      <ul className="flex flex-row py-3 lg:space-x-8 xl:space-x-14 2xl:space-x-20 mr-3 mt-6 lg:mr-6 xl:mr-9 2xl:mr-16 font-roboto_condensed text-white text-xl">
				<li className="nav-menu">
					<Link href={'/'}>
						<h1>Home</h1>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/blog-collection'}>
						<h2 className="">Blog Collection</h2>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/categories'}>
						<h2>Article Categories</h2>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/tags'}>
						<h2>Article Tags</h2>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/contact'}>
						<h2>Contact</h2>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/about'}>
						<h2>About us</h2>
					</Link>
				</li>
			</ul>
    </div>
  );
}

export default NavbarMenuLarge;
