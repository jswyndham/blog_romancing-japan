import Link from 'next/link';
import Image from 'next/image';

function SocialMediaLinks() {
	return (
		<div className="flex flex-row gap-6 my-3">
			<Link
				href="https://jp.pinterest.com/RomancingJapan/"
				target="_blank"
				className="w-7 h-7 relative"
			>
				<Image
					src="/images/pinterest.png"
					width={50}
					height={50}
					alt="romancing japan twitter"
				/>
			</Link>
			<Link
				href="https://www.instagram.com/romancingjapan/"
				target="_blank"
				className="w-7 h-7 relative"
			>
				<Image
					src="/images/instagram-50-white-2.png"
					width={28}
					height={28}
					alt="romancing japan instagram"
				/>
			</Link>
			<Link
				href="https://www.facebook.com/profile.php?id=100093723613018"
				target="_blank"
				className="w-7 h-7 relative"
			>
				<Image
					src="/images/facebook-50-white.png"
					width={28}
					height={28}
					alt="romancing japan facebook"
				/>
			</Link>
			<Link
				href="https://www.linkedin.com/company/romancing-japan/"
				target="_blank"
				className="w-7 h-7 relative"
			>
				<Image
					src="/images/linkedin2.png"
					width={28}
					height={28}
					alt="romancing japan linkedIn"
				/>
			</Link>
		</div>
	);
}

export default SocialMediaLinks;
