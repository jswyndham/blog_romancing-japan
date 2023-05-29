import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer className='bottom-0 footer footer-center rounded bg-slate-900 p-10 mt-4 text-base-content'>
				<div className='grid grid-flow-col gap-4 text-white'>
					<Link href='/about'>About us</Link>
					<Link href='/contact'>Contact</Link>
					<Link href='/'>Privacy Policy</Link>
				</div>
				<div>
					<div className='py-3'>
						<Link href='/'>
							<Image
								src='/images/logo-footer-white.png'
								width={175}
								height={65}
								alt='romancing japan logo'
							/>
						</Link>
					</div>
					<div className='grid grid-flow-col gap-4'>
						<Link href='/'>
							<Image
								src='/images/twitter-50.png'
								width={30}
								height={30}
								alt='romancing japan logo'
							/>
						</Link>
						<Link href='/'>
							<Image
								src='/images/youtube-48.png'
								width={30}
								height={30}
								alt='romancing japan logo'
							/>
						</Link>
						<Link href='/'>
							<Image
								src='/images/facebook-50.png'
								width={30}
								height={30}
								alt='romancing japan logo'
							/>
						</Link>
					</div>
				</div>
				<div className='text-white'>
					<p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
				</div>
			</footer>
		</>
	);
}
