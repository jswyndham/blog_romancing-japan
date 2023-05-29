'use client';

import {
	AiOutlineHome,
	AiOutlineTags,
	AiOutlineMail,
	AiOutlineCloseSquare,
} from 'react-icons/ai';
import { BsCollection, BsInfoCircle } from 'react-icons/bs';
import { BiCategory } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<header className='relative h-24 bg-black flex flex-row justify-between align-middle overflow-hidden'>
				{/* Nav for medium size up */}
				<nav className='z-0 mt-2'>
					{/* Logo */}
					<div>
						<Link href='/'>
							<Image
								src='/images/logo-nav.png'
								width={250}
								height={250}
								alt='romancing japan logo'
								className='m-4'
							/>
						</Link>
					</div>

					{/* Hamburger button */}
					<div className='absolute right-0 top-0 m-3 p-2'>
						<button onClick={handleClick}>
							<Image
								src='/images/hamburger-menu-50.png'
								width={50}
								height={50}
								alt='romancing japan logo'
								className='z-50 btn-ghost btn-square btn p-2'
							/>
						</button>
					</div>
				</nav>

				{/* Drop menu */}
				<nav
					className={`${
						!isOpen
							? 'translate-x-full z-50 transition ease-in-out duration-300'
							: 'translate-x-0 z-50 w-[55%] fixed right-0 top-0 shadow-2xl shadow-black drop-shadow-xl transition ease-in-out duration-300'
					}`}
				>
					<div className='h-screen pt-14 px-3 bg-gray-800'>
						<button
							onClick={handleClick}
							className='absolute z-50 top-0 right-0 m-6 text-white text-2xl hover:text-red-300 focus:text-red-200 focus:font-bold active:text-red-400'
						>
							<AiOutlineCloseSquare />
						</button>
						<ul className='flex flex-col py-3 font-krona_one text-white text-md text-left'>
						<Link onClick={handleClick} href={'/'}><li className='flex flex-row px-6 py-4 hover:text-red-300 hover:text-lg focus:text-red-200 focus:font-bold active:text-red-400'>
								<div className='mt-1 pl-2 pr-8'>
									<AiOutlineHome />
								</div>
								<div>
									Home
								</div>
							</li></Link>
							<Link onClick={handleClick} href={'/collection'}><li className='flex flex-row px-6 py-4 hover:text-red-300 hover:text-lg focus:text-red-200 focus:font-bold active:text-red-400'>
								<div className='mt-1 pl-2 pr-8'>
									<BsCollection />
								</div>
								<div>
									Collection
								</div>
							</li></Link>
							<Link onClick={handleClick} href={'/categories'}><li className='flex flex-row px-6 py-4 hover:text-red-300 hover:text-lg focus:text-red-200 focus:font-bold active:text-red-400'>
								<div className='mt-1 pl-2 pr-8'>
									<BiCategory />
								</div>
								<div>
									Categories
								</div>
							</li></Link>
							<Link onClick={handleClick} href={'/tags'}><li className='flex flex-row px-6 py-4 hover:text-red-300 hover:text-lg focus:text-red-200 focus:font-bold active:text-red-400'>
								<div className='mt-1 pl-2 pr-8'>
									<AiOutlineTags />
								</div>
								<div>
									Tags
								</div>
							</li></Link>
							<Link onClick={handleClick} href={'/contact'}><li className='flex flex-row px-6 py-4 hover:text-red-300 hover:text-lg focus:text-red-200 focus:font-bold active:text-red-400'>
								<div className='mt-1 pl-2 pr-8'>
									<AiOutlineMail />
								</div>
								<div>
									Contact
								</div>
							</li></Link>
							<Link onClick={handleClick} href={'/about'}><li className='flex flex-row px-6 py-4 hover:text-red-300 hover:text-lg focus:text-red-200 focus:font-bold active:text-red-400'>
								<div className='mt-1 pl-2 pr-8'>
									<BsInfoCircle />
								</div>
								<div>
									About us
								</div>
							</li></Link>
						</ul>
					</div>
				</nav>
			</header>
		</>
	);
}
