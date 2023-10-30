import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

function SocialMediaLinks() {
	return (
		<div className="flex flex-row gap-6 my-3">
			<Link href="https://twitter.com/RomancingJapan" target="_blank">
				<div className="w-7 h-7 relative">
					<Image
						src="/images/twitter-x-logo.png"
						fill
						alt="romancing japan twitter"
					/>
				</div>
			</Link>
			<Link
				href="https://www.instagram.com/romancingjapan/"
				target="_blank"
			>
				<div className="w-7 h-7 relative">
					<Image
						src="/images/instagram-50-white-2.png"
						fill
						alt="romancing japan instagram"
					/>
				</div>
			</Link>
			<Link
				href="https://www.facebook.com/profile.php?id=100093723613018"
				target="_blank"
			>
				<div className="w-7 h-7 relative">
					<Image
						src="/images/facebook-50-white.png"
						fill
						alt="romancing japan facebook"
					/>
				</div>
			</Link>
			<Link
				href="https://www.linkedin.com/company/romancing-japan/"
				target="_blank"
			>
				<div className="w-7 h-7 relative">
					<Image
						src="/images/linkedin2.png"
						fill
						alt="romancing japan linkedIn"
					/>
				</div>
			</Link>
		</div>
	);
}

export default SocialMediaLinks;
