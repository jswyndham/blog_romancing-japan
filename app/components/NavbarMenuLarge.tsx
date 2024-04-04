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
						<h1 className="">Blog Collection</h1>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/categories'}>
						<h1>Article Categories</h1>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/tags'}>
						<h1>Article Tags</h1>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/contact'}>
						<h1>Contact</h1>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/about'}>
						<h1>About us</h1>
					</Link>
				</li>
			</ul>
    </div>
  );
}

export default NavbarMenuLarge;
