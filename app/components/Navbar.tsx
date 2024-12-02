'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
	AiOutlineHome,
	AiOutlineTags,
	AiOutlineMail,
	AiOutlineCloseSquare,
} from 'react-icons/ai';
import { IoCalendarOutline } from 'react-icons/io5';
import { BsCollection, BsInfoCircle } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import NavbarMenuLarge from './NavbarMenuLarge';
import SocialMediaLinks from './SocialMediaLinks';
import NavbarHooks from '../hooks/NavbarHooks';

const slideVariants = {
	open: {
		x: 0,
		transition: {
			type: 'spring',
			stiffness: 120,
			damping: 15,
		},
	},
	closed: {
		x: '100%',
		transition: {
			type: 'spring',
			stiffness: 120,
			damping: 20,
		},
	},
};

const Navbar = () => {
	const { isOpen, ref, handleClick } = NavbarHooks();
	return (
		<>
			<header className="relative h-28 w-full bg-black overflow-hidden">
				{/* Nav for medium size up */}
				<nav className="z-50 mt-1 ml-2 smd:mt-1 flex flex-row justify-between align-middle relative">
					{/* Logo */}
					<Link href="/">
						<div className="flex justify-center items-center mt-6 w-52 h-12 xl:w-60 xl:h-14 2xl:w-64 2xl:h-16 relative">
							<Image
								src="/images/logo-nav-2.png"
								width={750}
								height={189}
								alt="romancing japan logo"
								className="absolute top-0 md:ml-4"
								loading="lazy"
							/>
						</div>
					</Link>

					{/* TOP NAV MENU */}
					<NavbarMenuLarge />

					{/* SIDEBAR MENU */}
					{/* Hamburger button */}
					<motion.div
						className="absolute right-0 top-0 mt-5 mr-6 bg-red-600 w-14 h-14 flex items-center justify-center 2xl:hidden hover:bg-red-700 active:bg-red-500"
						initial={{ borderRadius: '4px' }}
						whileHover={{
							borderRadius: '50%',
							scale: 1.1,
						}}
						transition={{
							type: 'spring',
							stiffness: 200,
							damping: 15,
						}}
					>
						<button onClick={handleClick} aria-label="Menu button">
							<Image
								src="/images/hamburger-menu-50.png"
								width={50}
								height={50}
								alt="hamburger menu logo"
								className="z-50 btn-ghost btn-square btn p-2 hover:bg-red-700 hover:rounded-full active:bg-red-500"
								loading="lazy"
							/>
						</button>
					</motion.div>
				</nav>

				{/* SLIDE MENU */}
				<AnimatePresence>
					{isOpen && (
						<motion.nav
							ref={ref}
							className="z-50 w-80 fixed right-0 top-0 shadow-2xl shadow-black drop-shadow-xl h-screen pt-14 px-3 bg-gray-800"
							initial="closed"
							animate="open"
							exit="closed"
							variants={slideVariants}
						>
							<div className="h-screen pt-14 px-3 bg-gray-800">
								<button
									onClick={handleClick}
									aria-label="Menu button"
									className="nav-close"
								>
									<AiOutlineCloseSquare />
								</button>
								<ul className="flex flex-col py-3 font-roboto_condensed text-white text-xl text-left">
									<li className="nav-list before:-ml-12 hover:before:w-5/12">
										<Link onClick={handleClick} href={'/'}>
											<div className="flex flex-row">
												<div className="mt-1 pl-2 pr-8">
													<AiOutlineHome />
												</div>
												<div>
													<p>Home</p>
												</div>
											</div>
										</Link>
									</li>

									<li className="nav-list before:ml-2 hover:before:w-10/12">
										<Link
											onClick={handleClick}
											href={'/book-tours'}
										>
											<div className="flex flex-row">
												<div className="mt-1 pl-2 pr-8">
													<IoCalendarOutline />
												</div>
												<div>
													<p>Kyoto Tour Bookings</p>
												</div>
											</div>
										</Link>
									</li>

									<li className="nav-list hover:before:w-8/12 before:-ml-4">
										<Link
											onClick={handleClick}
											href={'/blog-collection'}
										>
											<div className="flex flex-row">
												<div className="mt-1 pl-2 pr-8">
													<BsCollection />
												</div>
												<div>
													<p>Blog Collection</p>
												</div>
											</div>
										</Link>
									</li>

									<li className="nav-list hover:before:w-9/12 before:-ml-1">
										<Link
											onClick={handleClick}
											href={'/categories'}
										>
											<div className="flex flex-row">
												<div className="mt-1 pl-2 pr-8">
													<BiCategory />
												</div>
												<div>
													<p>Article Categories</p>
												</div>
											</div>
										</Link>
									</li>

									<li className="nav-list hover:before:w-7/12 before:-ml-6">
										<Link
											onClick={handleClick}
											href={'/tags'}
										>
											<div className="flex flex-row">
												<div className="mt-1 pl-2 pr-8">
													<AiOutlineTags />
												</div>
												<div>
													<p>Article Tags</p>
												</div>
											</div>
										</Link>
									</li>

									<li className="nav-list hover:before:w-6/12 before:-ml-9">
										<Link
											onClick={handleClick}
											href={'/contact'}
										>
											<div className="flex flex-row">
												<div className="mt-1 pl-2 pr-8">
													<AiOutlineMail />
												</div>
												<div>
													<p>Contact</p>
												</div>
											</div>
										</Link>
									</li>

									<li className="nav-list hover:before:w-6/12 before:-ml-9">
										<Link
											onClick={handleClick}
											href={'/about'}
										>
											<div className="flex flex-row">
												<div className="mt-1 pl-2 pr-8">
													<BsInfoCircle />
												</div>
												<div>
													<p>About us</p>
												</div>
											</div>
										</Link>
									</li>

									{/* FOLLOW US (SM LINKS)*/}
									<li className="flex flex-col items-left justify-center pl-8 pb-1 my-3 2xl:pb-4">
										<SocialMediaLinks />
									</li>
								</ul>
							</div>
						</motion.nav>
					)}
				</AnimatePresence>
			</header>
		</>
	);
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
