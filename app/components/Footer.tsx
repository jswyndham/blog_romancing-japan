import Image from 'next/image';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';

export default function Footer() {
	return (
		<>
			<footer className="footer footer-center rounded bg-slate-900 p-6 text-base-content">
				<div className="grid grid-flow-col gap-8 text-white text-lg">
					<Link href="/about">About us</Link>
					<Link href="/contact">Contact</Link>
					<Link href="/privacyPolicy">Privacy Policy</Link>
				</div>
				<div>
					<div className="my-4 w-64 h-16 relative">
						<Link href="/">
							<Image
								src="/images/logo-footer-white-2.png"
								width={256}
								height={65}
								alt="romancing japan white logo"
								loading="lazy"
							/>
						</Link>
					</div>
					<SocialMediaLinks />
				</div>
				<div className="text-white">
					<p>Copyright © 2023 - All right reserved by JSW Web Dev</p>
				</div>
			</footer>
		</>
	);
}
