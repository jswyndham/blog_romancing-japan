import Link from 'next/link';

function NavbarMenuLarge() {
	return (
		<div className="hidden xl:flex smd: flex-col gap-2">
			{/* NAVBAR MENU */}
			<ul className="flex flex-row py-3 lg:space-x-8 xl:space-x-14 2xl:space-x-20 mr-3 mt-6 lg:mr-6 xl:mr-9 2xl:mr-16 font-roboto_condensed text-white text-xl">
				<li className="nav-menu">
					<Link href={'/'}>
						<p>Home</p>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/blog-collection'}>
						<p className="">Blog Collection</p>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/categories'}>
						<p>Article Categories</p>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/tags'}>
						<p>Article Tags</p>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/contact'}>
						<p>Contact</p>
					</Link>
				</li>

				<li className="nav-menu">
					<Link href={'/about'}>
						<p>About us</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavbarMenuLarge;
